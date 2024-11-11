const router = require('express').Router();
const { 
    uploadStory, 
    getAllStories, 
    getStoryById, 
    deleteStory 
} = require('../controllers/storyControllers');

// Basic routes - we'll add validation in a moment once we confirm these work
router.post('/post', uploadStory);
router.get('/', getAllStories);
router.get('/:id', getStoryById);
router.delete('/:id', deleteStory);

module.exports = router;