# 1. FROM: Always the first line. You never start from scratch. 
# You grab a pre-built, tiny Linux OS that already has Python installed.
FROM python:3.11-slim

# 2. WORKDIR: Creates a folder named /app inside the container and moves you into it. 
# Everything you do next happens inside this folder.
WORKDIR /app

# 3. COPY: Moves files from your laptop (left) into the container (right).
# The dot (.) means "current folder". 
# This copies requirements.txt from your laptop to /app inside the container.
COPY requirements.txt .

# 4. RUN: Executes a terminal command inside the container during the build phase.
# This installs your FastAPI and Uvicorn libraries.
RUN pip install --no-cache-dir -r requirements.txt

# 5. COPY again: Now copy the rest of your actual code (like main.py) into the container.
COPY . .

# 6. CMD: The command that runs ONLY when the container is actually started.
# This boots up your FastAPI server.
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

# commands:
# docker build -t <name u want to give> . -> builds the image from docerfile with the name, the last dot tells Docker to look in the current folder for the files.


# docker run -p 8080:8000 my-api
# Takes your my-api Image and spins up a live Container.
# -p 8080:8000 is the port mapping. It connects port 8080 on your laptop to port 8000 inside the container so you can actually reach the FastAPI server.

# docker ps
# Lists all containers currently running on your machine. You will see a unique Container ID (like a1b2c3d4e5f6).


# docker stop <container-id>
# Gracefully shuts down the running container using the ID you found with docker ps.