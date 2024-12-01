const {Pictures} = require('../models/index')
const path = require('path');
const fs = require('fs').promises;

exports.uploadPictures = async (req, res, next) => {
    try {
      console.log('Starting upload process');
      console.log('Request file:', req.file);
  
      if (!req.file) {
        console.log('No file found in request');
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      console.log('Creating new Picture');
      const picture = new Pictures({
        filename: req.file.filename,
        data: req.file.data,
        contentType: req.file.contentType,
        path: `/uploads/text/${req.file.filename}`,
        title: req.file.title,
        description: req.file.description
      });
  
      console.log('Saving Picture to database');
      await picture.save();
      console.log('Picture saved successfully');
      
      res.status(201).json({
        message: 'Picture uploaded successfully',
        picture
      });
    } catch (error) {
      next(error);
    }
  };
  
  exports.getAllPictures = async (req, res, next) => {
    try {
      const documents = await Pictures.find().sort({ uploadDate: -1 });
      res.json(documents);
    } catch (error) {
      next(error);
    }
  };
  
  exports.getPicturesById = async (req, res, next) => {
    try {
      const document = await Pictures.findById(req.params.id);
      if (!document) {
        return res.status(404).json({ error: 'Document not found' });
      }
      res.json(document);
    } catch (error) {
      next(error);
    }
  };
  
  exports.deletePictures = async (req, res, next) => {
    try {
      const document = await Pictures.findById(req.params.id);
      
      if (!document) {
        return res.status(404).json({ error: 'Document not found' });
      }
  
      // Remove file from uploads folder
      await fs.unlink(path.join(__dirname, '../../uploads', document.filename));
      
      // Remove document from database
      await Pictures.findByIdAndDelete(req.params.id);
  
      res.json({ message: 'Document deleted successfully' });
    } catch (error) {
      next(error);
    }
  };