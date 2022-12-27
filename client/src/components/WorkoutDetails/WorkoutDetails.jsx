import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import classes from './WorkoutDetails.module.css';
import useWorkoutsContext from '../../hooks/useWorkoutsContext';

// date fns

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const deleteWorkoutHandler = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

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
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={deleteWorkoutHandler} aria-hidden="true">delete</span>
    </div>
  );
}

export default WorkoutDetails;
