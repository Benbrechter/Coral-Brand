const mongoose = require('mongoose');

const writingSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  data: Buffer,
  contentType: {
    type: String,
  },
  content: {
    type: String,
  },
  path: {
    type: String,
    required: true
  },
  title: {
    type: String,
  },
  chapter: {
    type: String
  }
},
 { timestamps: true }
);

const Writings = mongoose.model('Writings', writingSchema);

module.exports = Writings;