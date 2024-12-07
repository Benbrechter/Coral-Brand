const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://benbrechter3:W2O308Q15ALz6NOY@benbeejammin.7e5q1.mongodb.net/test'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Coral-Studio');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;