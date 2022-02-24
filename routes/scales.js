const express = require('express');
//import scale controllers
const { getScales, getScale, createScale, updateScale, deleteScale } = require('../controllers/scales');
const router = express.Router();

//attach the imported methods to the router
router
.route('/')
.get(getScales)
.post(createScale);

router
.route('/:id')
.get(getScale)
.put(updateScale)
.delete(deleteScale);


module.exports = router