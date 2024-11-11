const express = require('express');
const router = express.Router();
const documentRoutes = require('./documentRoutes');
const userRoutes = require('./userRoutes')
const pictureRoutes = require('./pictureRoutes')
const storyRoutes = require('./storyRoutes')


router.use('/documents', documentRoutes);
router.use('/', userRoutes)
router.use('/pictures', pictureRoutes)
router.use('/story', storyRoutes)

module.exports = router;