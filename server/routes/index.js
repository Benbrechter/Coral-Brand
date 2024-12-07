const express = require('express');
const router = express.Router();
const documentRoutes = require('./documentRoutes');
const userRoutes = require('./userRoutes')
const pictureRoutes = require('./pictureRoutes')


router.use('/DOCuments', documentRoutes);
router.use('/', userRoutes)
router.use('/pictures', pictureRoutes)

module.exports = router;