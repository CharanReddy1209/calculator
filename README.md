# MERN Calculator Application

A modern calculator application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- Modern, responsive UI with glassmorphism design
- Real-time calculations
- Error handling
- Backend API for secure calculations

## Project Structure

```
calculator-app/
├── backend/
│   ├── package.json
│   └── server.js
└── frontend/
    ├── package.json
    ├── public/
    └── src/
        ├── components/
        │   ├── Calculator.js
        │   └── Calculator.css
        ├── App.js
        └── App.css
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

The backend server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend application will run on http://localhost:3000

## Usage

1. Open your browser and navigate to http://localhost:3000
2. Use the calculator interface to perform calculations
3. The results will be displayed in real-time

## Technologies Used

- Frontend:
  - React.js
  - CSS3
  - Axios

- Backend:
  - Node.js
  - Express.js
  - CORS 