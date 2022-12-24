const Workout = require("../model/workoutsModel");

const getWorkouts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const workouts = await Workout.find();
      resolve(workouts);
    } catch (error) {
      reject(error);
    }
  });
};

const createWorkout = (workoutData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Workout.create(workoutData);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const getWorkout = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const workout = await Workout.findOne({ _id: id });
      resolve(workout);
    } catch (error) {
      reject(error);
    }
  });
};

const updateWorkout = (id, newData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updatedWorkout = await Workout.findOneAndUpdate(
        { _id: id ,
        ...newData }
      );
      resolve(updatedWorkout);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteWorkout = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deletedWorkout = await Workout.findOneAndDelete({ _id: id });
      resolve(deletedWorkout);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getWorkouts,
  createWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
