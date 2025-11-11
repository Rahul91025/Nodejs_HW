const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
    const Authorization = req.headers.authorization;
    if (!Authorization) return res.status(401).json({ error: 'Token not found' });

    // Extract the JWT token from the request header
    const token = Authorization.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the user information to the request object
        req.user = decoded;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: 'Invalid token' }); // Corrected status code
    }
};

// Function to generate the JWT token
const generateToken = (userData) => {
    // Generate JWT token using user data
    return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 3000 });
};

module.exports = { jwtAuthMiddleware, generateToken };
