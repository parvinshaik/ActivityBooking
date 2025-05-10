# 🗓️ Activity Booking App
The Activity Booking App is a RESTful API developed using Node.js, Express.js, and MongoDB. It allows users to register, log in using JWT-based authentication, view a list of available activities like cricket matches or movie nights, and book these activities. Users can also retrieve their personal booking history. The application includes authentication middleware to protect private routes and supports secure access to user-specific data. Activities are publicly viewable, but booking and viewing personal bookings require a valid JWT token. The app uses Mongoose for MongoDB object modeling, and it’s tested using Postman, where endpoints for user registration (/api/auth/register), login (/api/auth/login), listing activities (/api/activities), booking an activity (/api/activities/book/:id), and getting a user's bookings (/api/activities/my-bookings) are provided. This project is suitable for showcasing skills in building a secure and scalable backend using modern web technologies.
## 🚀 Features
- ✅ User Registration & Login with JWT
- 🔐 Authentication & Authorization Middleware
- 🎯 List Available Activities (public)
- 📝 Book Activities (authorized users)
- 📋 View My Bookings (authorized users)

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- Postman (for API testing)

  
📬 API Endpoints
1. Auth
POST /api/auth/register – Register a new user

POST /api/auth/login – Login and get a token

2. Activities
GET /api/activities – List all activities (public)

POST /api/activities/book/:id – Book an activity (protected)

GET /api/activities/my-bookings – View my bookings (protected)
