from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Version 1"}

if __name__ == "__main__":
    # Crucial detail: To use reload=True, you MUST pass the import string "main:app". 
    # If you pass the `app` object directly, Uvicorn cannot restart the file.
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)