const express = require("express");
const {
  getWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");

const router = express.Router();

router.route("/").get(getWorkouts).post(createWorkout);

router.route("/:id").get(getWorkout).delete(deleteWorkout).patch(updateWorkout);

module.exports = router;
