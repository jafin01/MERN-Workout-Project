const express = require('express');
const { getWorkouts } = require('../controller/workoutController');

const router = express.Router();

router.get('/', getWorkouts);

module.exports = router;