import classes from "./WorkoutDetails.module.css";

const WorkoutDetails = ({ workout }) => {
  return (
    <div className={classes.workout_details}>
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
