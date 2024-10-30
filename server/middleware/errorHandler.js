const multer = require('multer');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          error: 'File is too large. Maximum size is 5MB'
        });
      }
      return res.status(400).json({
        error: err.message
      });
    }
  
    res.status(500).json({
      error: 'Something went wrong!'
    });
  };
  
  module.exports = errorHandler;
  