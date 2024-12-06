const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/connections');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

// Create uploads folder if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
    console.log('Uploads directory created at:', uploadsDir);
}

// Connect to MongoDB
connectDB();

// Enhanced CORS configuration for Amplify
app.use(cors({
    origin: process.env.CLIENT_URL || 'https://main.d1wcswfis70r56.amplifyapp.com',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically with proper headers
app.use('/uploads', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.CLIENT_URL || 'https://main.d1wcswfis70r56.amplifyapp.com');
    express.static(path.join(__dirname, 'uploads'))(req, res, next);
});

// Add health check endpoint for AWS
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Routes with proper error handling
app.use('/api', routes);
app.use(errorHandler);

// Enhanced error logging
process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

// Only start the server if we're not in a test environment
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`Uploads directory: ${uploadsDir}`);
        console.log(`CORS origin: ${process.env.CLIENT_URL || 'https://main.d1wcswfis70r56.amplifyapp.com'}`);
    });
}

module.exports = app;