const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI ||"mongodb+srv://benbrechter3:W2O308Q15ALz6NOY@benbeejammin.7e5q1.mongodb.net/test"
const connectDB = async () => {
  try {
    // Verify the URI is being read correctly
    console.log('Attempting to connect with URI:', MONGODB_URI);

    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add database name explicitly
      dbName: 'test' // Replace with your actual database name
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    console.error(`Error Details: ${error.message}`);
    console.error(`Error Stack: ${error.stack}`);
    process.exit(1);
  }
};

module.exports = connectDB;