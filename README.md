# Expense Tracker Application

## Description
This is a full-stack Expense Tracker Application built using MongoDB, React, and Node.js. The application allows users to track their incomes and expenses, visualize their financial data with charts, and manage their personal finances effectively.

## Features
- Add, edit, and delete income and expense transactions.
- Store transaction data in a MongoDB database.
- Display financial insights using charts.
- Responsive UI built with React and styled-components.
- Backend API created with Express.js and connected to MongoDB.
- State management handled using React hooks.

## Technologies Used
- **Frontend:** React.js, Styled-Components, Chart.js, Axios, React-Datepicker
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, CORS, Dotenv, Nodemon
- **API Testing:** Postman

---

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v14+ recommended)
- MongoDB (local or cloud-based with MongoDB Atlas)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install express mongoose mongodb cors nodemon dotenv
   ```
3. Create a `.env` file in the backend root and add the following:
   ```env
   PORT=5000
   MONGO_URL="your_mongodb_connection_string"
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install axios chart.js moment react-chartjs-2 react-datepicker styled-components
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```

---

## Running the Application
1. **Start the backend server:** Ensure MongoDB is running, then start the backend with `npm start`.
2. **Start the frontend client:** Run `npm start` in the frontend folder.
3. **Access the application:** Open `http://localhost:3000` in your web browser.
4. **Test API endpoints:** Use Postman to send requests to `http://localhost:5000/api`.

---

## Author
Developed by Alex Otero
