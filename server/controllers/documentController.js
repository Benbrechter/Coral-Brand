const {Writings} = require('../models/index')
const path = require('path');
const fs = require('fs').promises;

exports.uploadWritings = async (req, res, next) => {
  try {
    console.log('Starting upload process');
    console.log('Request file:', req.file);

    if (!req.file) {
      console.log('No file found in request');
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log('Creating new Writings document');
    const document = new Writings({
      filename: req.file.filename,
      data: req.file.data,
      contentType: req.file.contentType,
      path: `/uploads/${req.file.filename}`,
      title: req.file.title,
      chapter: req.file.chapter
    });

    console.log('Saving document to database');
    await document.save();
    console.log('Document saved successfully');
    
    res.status(201).json({
      message: 'Document uploaded successfully',
      document
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllWritings = async (req, res, next) => {
  try {
    const documents = await Writings.find().sort({ uploadDate: -1 });
    res.json(documents);
  } catch (error) {
    next(error);
  }
};

exports.getWritingsById = async (req, res, next) => {
  try {
    const document = await Writings.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }
    res.json(document);
  } catch (error) {
    next(error);
  }
};

exports.deleteWritings = async (req, res, next) => {
  try {
    const document = await Writings.findById(req.params.id);
    
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Remove file from uploads folder
    await fs.unlink(path.join(__dirname, '../../uploads', document.filename));
    
    // Remove document from database
    await Writings.findByIdAndDelete(req.params.id);

    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    next(error);
  }
};