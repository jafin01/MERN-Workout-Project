// @desc get workouts
// @route GET /workouts
// @access public
const getWorkouts = (req, res) => {
  res.json({ mssg: "Welcome to the app" });
};

module.exports = {
  getWorkouts,
};
