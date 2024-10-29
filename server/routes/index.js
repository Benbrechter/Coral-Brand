const express = require('express');
const router = express.Router();
const documentRoutes = require('./documentRoutes');
const userRoutes = require('./userRoutes')


router.use('/documents', documentRoutes);
router.use('/', userRoutes)

module.exports = router;