const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  chapter: {
    type: Number
  },
  story: {
    type: String
  }
},
 { timestamps: true }
);

const Story = mongoose.model('Story', pdfSchema);

module.exports = Story;