const mongoose = require('mongoose');

//I need to make this function 
//https://stackoverflow.com/questions/21626896/nodejs-mongodb-native-find-all-documents


const MONGODB_URI = 'mongodb://benbrechter3:W2O308Q15ALz6NOY@benbeejammin.7e5q1.mongodb.net/test'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;