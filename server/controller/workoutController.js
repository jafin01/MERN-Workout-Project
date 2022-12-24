const asyncHandler = require("express-async-handler");
const workoutHelpers = require("../helpers/workoutHelpers");

// @desc get workouts
// @route GET /workouts
// @access public
const getWorkouts = asyncHandler(async (req, res) => {
  try {
    const workouts = await workoutHelpers.getWorkouts();
    
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400);
    throw new Error("could not fetch data");
  }
});

// @desc create a workout
// @route POST /workouts
// @access private
const createWorkout = asyncHandler(async (req, res) => {
  try {
    const workoutData = await workoutHelpers.createWorkout(req.body);
    res.status(201).json(workoutData);
  } catch (error) {
    res.status(400);
    throw new Error("could not create new workout");
  }
});

// @desc gets a single workout document
// @route GET /workouts/:id
// @access private
const getWorkout = asyncHandler(async (req, res) => {
  try {
    const workout = await workoutHelpers.getWorkout(req.params.id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(400);
    throw new Error("Could not fetch data");
  }
});

// @desc delete a workout
// @route DELETE /workouts/:id
// @access private
const deleteWorkout = asyncHandler(async (req, res) => {
  try {
    const workout = await workoutHelpers.deleteWorkout(req.params.id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(400);
    throw new Error("Could not delete the workout");
  }
});

// @desc update a workout
// @route PATCH /workouts/:id
// @access private
const updateWorkout = asyncHandler(async (req, res) => {
  try {
    const updatedWorkout = await workoutHelpers.updateWorkout(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(400);
    throw new Error("Could not update the workout");
  }
});

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
