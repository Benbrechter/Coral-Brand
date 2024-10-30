const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  data: Buffer,
  contentType: {
    type: String,
  },
  path: {
    type: String,
    required: true
  }
},
 { timestamps: true }
);

const Writings = mongoose.model('Writings', pdfSchema);

module.exports = Writings;