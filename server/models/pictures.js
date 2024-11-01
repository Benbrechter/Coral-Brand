const mongoose = require('mongoose')

const pictures = new mongoose.Schema({
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
      },
      title: {
        type: String,
      },
      description: {
        type: String
      }

})

const Pictures = mongoose.model('Pictures', pictures)

module.exports = Pictures