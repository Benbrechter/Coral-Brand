const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/connections');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
// const { createUploadsFolder } = require('./utils/fileSystem');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Create uploads folder if it doesn't exist
// createUploadsFolder();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
