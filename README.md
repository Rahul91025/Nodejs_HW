# Node.js Homework Projects

This repository contains two Node.js applications developed as homework assignments:

## Projects

### 1. First - Hotel Management System 🏨
A comprehensive hotel management system built with Node.js, Express.js, and MongoDB.

**Features:**
- User-friendly interface for staff and guests
- Secure authentication and authorization
- Real-time room availability and booking
- Detailed analytics for decision-making
- Scalable architecture

**Location:** `First/` directory

### 2. Second - Voting Application 🗳️
A secure voting system where users can register, authenticate, and vote for candidates.

**Features:**
- User registration and login with Aadhar card verification
- Candidate management (admin only)
- Secure voting mechanism
- Live vote count display
- Password change functionality
- JWT-based authentication

**Location:** `Second/` directory

## Technology Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, Passport.js
- **Security:** bcrypt for password hashing
- **Other:** body-parser, lodash, nodemon

## Getting Started

Each project is self-contained with its own dependencies and configuration.

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone this repository
2. For each project, navigate to its directory and install dependencies:
   ```bash
   cd First
   npm install

   cd ../Second
   npm install
   ```

3. Set up environment variables in `.env` files for each project
4. Start the applications:
   ```bash
   # In First directory
   npm start

   # In Second directory
   npm start
   ```

## Project Structure
```
Nodejs_HW/
├── First/          # Hotel Management System
│   ├── Models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── ...
├── Second/         # Voting Application
│   ├── models/
│   ├── routes/
│   ├── planning.txt
│   ├── package.json
│   └── ...
├── README.md       # This file
└── TODO.md         # Development notes
```

## Contributing
This is a homework repository. For educational purposes only.

## License
ISC
