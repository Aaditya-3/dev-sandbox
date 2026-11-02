import jwt
import uuid
from fastapi import FastAPI , Depends , HTTPException , status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from datetime import datetime, timedelta, timezone

app = FastAPI()
security = HTTPBearer()

secret_key = "some_random_ass_key"
redis_blocklist = set()
def generate_token(user_id : str):
    payload = {
        "subject" : user_id,
        "role" : "user",
        "jti" : str(uuid.uuid4()),
        "exp" : datetime.now(timezone.utc) + timedelta(minutes = 15)
    }
    return jwt.encode(payload , secret_key , algorithm = "HS256")

def verify_token(credentials : HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    # httpAutho.. is class with 2 attributes -> credentials , scheme
    # there are 3 types of schemes 
    try:
        decoded = jwt.decode(token , secret_key , algorithms = ["HS256"])
        if decoded["jti"] in redis_blocklist:
            raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED , detail = "Token has been revoked")
        return decoded
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

@app.post("/logout")
#Depends() is FastAPI's dependency injection mechanism. It allows us to declare that an endpoint or another dependency requires a particular function or resource, and FastAPI automatically executes that dependency, resolves its own dependencies, and injects its return value into the function.
def logout(user_data : dict = Depends(verify_token)):
    redis_blocklist.add(user_data["jti"])
    return {"msg" : "successfully logged out"}

@app.get("/protected")
def get_protected_data(user_data : dict = Depends(verify_token)):
    return {
        "msg" : "access granted",
        "user" : user_data["subject"]    
        }
