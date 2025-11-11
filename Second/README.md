# Voting Application

A Node.js-based voting system where users can sign up, log in, and vote for candidates. The application includes an admin panel for managing candidates and viewing vote counts.

## Features

### User Functionality
- **Sign Up / Sign In**: Users can create accounts and log in using their Aadhar card number and password.
- **View Candidates**: Users can see the list of available candidates.
- **Vote**: Users can cast a vote for one of the candidates.
- **Profile Management**: Users can view their profile and change their password.

### Admin Functionality
- **Candidate Management**: Admins can add, update, and delete candidates.
- **Vote Counts**: Admins can view live vote counts sorted by vote totals.
- **No Voting Rights**: Admins cannot vote in the system.

### Security
- Secure authentication using JWT tokens.
- Password hashing with bcrypt.
- Unique government ID verification (Aadhar card number).

## Technology Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, Passport.js
- **Security**: bcrypt for password hashing

## API Routes

### User Authentication
- `POST /signup`: Create a new user account
- `POST /login`: Login to user account

### Voting
- `GET /candidates`: Get list of candidates
- `POST /vote/:candidateId`: Vote for a specific candidate

### Vote Counts
- `GET /vote/counts`: Get candidates sorted by vote counts

### User Profile
- `GET /profile`: Get user profile information
- `PUT /profile/password`: Change user password

### Admin Candidate Management
- `POST /candidates`: Create a new candidate
- `PUT /candidates/:candidateId`: Update an existing candidate
- `DELETE /candidates/:candidateId`: Delete a candidate

## Installation

1. Clone the repository
2. Navigate to the Second directory
3. Install dependencies: `npm install`
4. Set up environment variables in `.env` file
5. Start the server: `npm start`

## Environment Variables

Create a `.env` file in the root directory with the following variables:
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `PORT`: Server port (default: 3000)

## Usage

1. Start the server with `npm start`
2. Use API endpoints to interact with the application
3. Admin can manage candidates via dedicated routes
4. Users can register, login, and vote

## Contributing

Feel free to contribute to the project by submitting pull requests or reporting issues.

## License

ISC
