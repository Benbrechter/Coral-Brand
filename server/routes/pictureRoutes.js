const express = require('express');
const router = express.Router();
const { uploadMiddleware } = require('../middleware/upload');
const { 
  uploadPictures,
  getAllPictures,
  getPicturesById,
  deletePictures,
  
} = require('../controllers/picturesControllers');

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
  uploadPictures
);
router.get('/', getAllPictures);
router.get('/:id', getPicturesById);
router.delete('/:id', deletePictures);

module.exports = router;