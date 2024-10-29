const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  data: {
    type: Buffer,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  }
});

const Writings = mongoose.model('Writings', pdfSchema);

module.exports = Writings;