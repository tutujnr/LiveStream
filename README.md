## RTSP Livestream App
This project is a full-stack web application that allows users to view a livestream video from an RTSP (Real-Time Streaming Protocol) URL and manage custom overlays (logos, text) on the video. The application consists of a React frontend and a Flask backend, with MongoDB used for storing overlay settings.

## Features
Livestream RTSP Video: Users can input an RTSP URL to play live video streams.

Overlay Options: Users can add custom overlays (logos, text) on top of the video stream.

CRUD API for Overlays: A backend API that allows users to create, read, update, and delete overlay settings.

Basic Video Controls: Play, pause, and adjust volume of the livestream.

## Tech Stack
Frontend:

React: Handles the user interface and interacts with the backend API.

React-Player: Used for embedding and controlling RTSP video streams.

Backend:

Flask: Provides the API for managing overlays and interacting with the frontend.

MongoDB: Stores overlay settings such as position, size, and content.


# Setup Instructions
Backend Setup (Flask)

Clone the repository:

git clone https://github.com/tutujnr/LiveStream.git

cd backend

# Install the required Python packages:

pip install -r requirements.txt

Set up the environment variables in the .env file:

MONGO_URI=mongodb://localhost:27017/

# Run the Flask backend:

python app.py

The Flask server will run at http://localhost:5000.

# Frontend Setup (React)

cd ../frontend

Install the required dependencies:

npm install

Run the React app:

npm start

The React app will be available at http://localhost:3000.

# Using the App

Open the app at http://localhost:3000.

Enter an RTSP URL into the input field and click the "Play Stream" button to start streaming.

The stream will appear with basic controls (play, pause, volume control).

You can also manage overlays (add, edit, delete) by interacting with the Overlay API.

# API Endpoints
The backend provides a set of CRUD (Create, Read, Update, Delete) API endpoints for managing overlays.
