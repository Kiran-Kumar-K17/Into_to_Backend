# Intro to Backend

A beginner-friendly Node.js backend project demonstrating RESTful API development with Express.js and MongoDB.

## 🚀 Features

- **User Authentication**: Register, login, and logout functionality with password hashing
- **Post Management**: Complete CRUD operations for posts
- **MongoDB Integration**: Database connectivity using Mongoose ODM
- **RESTful API Design**: Well-structured routes and controllers
- **Security**: Password hashing with bcrypt

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB (local or Atlas cloud database)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Kiran-Kumar-K17/Into_to_Backend.git
cd Into_to_Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/Into-to-backend
```

## 🏃 Running the Application

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:4000` (or your configured PORT).

## 📡 API Endpoints

### User Routes (`/api/v1/users`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login existing user |
| POST | `/logout` | Logout user |

### Post Routes (`/api/v1/posts`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/create` | Create a new post |
| GET | `/getPosts` | Get all posts |
| PATCH | `/update/:id` | Update a post by ID |
| DELETE | `/delete/:id` | Delete a post by ID |

## 📝 API Request Examples

### Register User
```bash
POST http://localhost:4000/api/v1/users/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Post
```bash
POST http://localhost:4000/api/v1/posts/create
Content-Type: application/json

{
  "name": "John Doe",
  "description": "Software Developer",
  "age": 25
}
```

## 🗂️ Project Structure

```
.
├── backend/
│   └── src/
│       ├── config/
│       │   ├── constent.js       # Database constants
│       │   └── database.js       # MongoDB connection
│       ├── controllers/
│       │   ├── post.controller.js
│       │   └── user.controller.js
│       ├── models/
│       │   ├── post.model.js
│       │   └── users.model.js
│       ├── routes/
│       │   ├── post.route.js
│       │   └── user.route.js
│       ├── app.js                # Express app setup
│       └── index.js              # Server entry point
├── .env
├── .gitignore
└── package.json
```

## 🔧 Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **bcrypt**: Password hashing
- **dotenv**: Environment variable management
- **nodemon**: Development auto-reload

## 👤 Author

**Kiran Kumar**

## 📄 License

This project is licensed under the ISC License.

## 🐛 Issues

If you encounter any issues, please report them at the [Issues page](https://github.com/Kiran-Kumar-K17/Into_to_Backend/issues).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
