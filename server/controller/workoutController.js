// @desc get workouts
// @route GET /workouts
// @access public
const getWorkouts = (req, res) => {
  res.json({ mssg: "Get workouts" });
};

// @desc create a workout
// @route POST /workouts
// @access private
const createWorkout = (req, res) => {
  res.json({ mssg: "Create a Workout" });
};

// @desc gets a single workout document
// @route GET /workouts/:id
// @access private
const getWorkout = (req, res) => {
  res.json({ mssg: "Get a Workout" });
};

// @desc delete a workout
// @route DELETE /workouts/:id
// @access private
const deleteWorkout = (req, res) => {
  res.json({ mssg: "Delete a Workout" });
};

// @desc update a workout
// @route PATCH /workouts/:id
// @access private
const updateWorkout = (req, res) => {
  res.json({ mssg: "Update a Workout" });
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
};
