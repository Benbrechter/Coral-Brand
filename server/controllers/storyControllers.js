const express = require('express');
const router = express.Router();
const Story = require('../models/story')

// GET all writings
const getAllStories = async (req, res) => {
  try {
    const story = await Story.find();
    res.json(story);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStoryById = async (req, res, next) => {
    try {
      const story = await Story.findById(req.params.id);
      if (!story) {
        return res.status(404).json({ error: 'Story not found' });
      }
      res.json(story);
    } catch (error) {
      next(error);
    }
  };

  const uploadStory = async (req, res) => {
    try {
        const story = await Story.create({
            title: req.body.title,
            chapter: req.body.chapter,
            story: req.body.story,
        });
        
        res.status(201).json({
            success: true,
            data: story
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

 const deleteStory = async (req, res, next) => {
    try{
        const story = Story.findById(req.params.id);

        if(!story){
            return res.status(404).json({ error: 'Story not found' }); 
        }

        await Story.findByIdAndDelete(req.params.id)
        res.json({ message: 'this shit is dleted'})
    }catch(err){
        res.status(400).json({ message: err.message });
    }
  };



  module.exports = {
    uploadStory,
    getAllStories,
    getStoryById,
    deleteStory
};