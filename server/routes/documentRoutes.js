const express = require('express');
const router = express.Router();
const { uploadMiddleware } = require('../middleware/upload');
const { 
  uploadWritings,
  getAllWritings,
  getWritingsById,
  deleteWritings,
  
} = require('../controllers/documentController');

router.post('/upload', uploadMiddleware, uploadWritings);
router.get('/', getAllWritings);
router.get('/:id', getWritingsById);
router.delete('/:id', deleteWritings);

module.exports = router;