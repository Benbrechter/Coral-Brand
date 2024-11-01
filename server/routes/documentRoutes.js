const express = require('express');
const router = express.Router();
const { uploadMiddleware } = require('../middleware/upload');
const { 
  uploadWritings,
  getAllWritings,
  getWritingsById,
  deleteWritings,
  
} = require('../controllers/documentController');

router.post('/upload', 
  (req, res, next) => {
      console.log('Upload route hit');
      console.log('Request headers:', req.headers);
      console.log('Request body:', req.body);
      next();
  },
  uploadMiddleware,
  (req, res, next) => {
      console.log('After upload middleware');
      console.log('File:', req.file);
      next();
  },
  uploadWritings
);
router.get('/', getAllWritings);
router.get('/:id', getWritingsById);
router.delete('/:id', deleteWritings);

module.exports = router;