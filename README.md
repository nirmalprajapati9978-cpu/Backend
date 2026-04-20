# Backend
🚀 Login System Backend (Node.js + MongoDB)
This is a simple backend for a login & signup system built using pure Node.js (no Express) and MongoDB.
It handles user authentication and basic activity logging.
📌 Features
🔐 User Signup (create account)
🔑 User Login (authenticate user)
🧠 Password hashing using bcrypt
📦 MongoDB database integration using MongoDB
📝 Activity logging (login/signup events)
🌐 Ready for deployment on Render
🛠️ Tech Stack
Backend: Node.js (HTTP module)
Database: MongoDB
Hashing: bcrypt
📁 Project Structure
Bash
.
├── server.js        # Main server file
├── db.js            # Database connection
├── package.json
└── README.md
⚙️ Setup & Installation
1. Clone the repository
Bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
Bash
npm install
3. Setup environment variables
Create a .env file:
Environment
MONGO_URI=your_mongodb_connection_string
PORT=8000
▶️ Run the Server
Bash
node server.js
Server will run on:

http://localhost:8000
📡 API Endpoints
🔐 Signup
POST /sign
JSON
{
  "username": "example",
  "password": "1234"
}
Response:
JSON
{
  "success": true,
  "message": "User created"
}
🔑 Login
POST /login
JSON
{
  "username": "example",
  "password": "1234"
}
Response:
JSON
{
  "success": true,
  "message": "Login success"
}
🔐 Security Notes
Passwords are hashed using bcrypt before storing
Never store plain text passwords
Use HTTPS in production
🌍 Deployment
You can deploy this backend easily on Render:
Set environment variables in dashboard
Use process.env.PORT
Update frontend API URLs after deployment
🚧 Future Improvements
JWT Authentication (JSON Web Token)
User sessions
Notes feature (linked to users)
Rate limiting & security improvements
👨‍💻 Author
Made with 💙 by Nirmal
⭐ Support
If you like this project, give it a ⭐ on GitHub!