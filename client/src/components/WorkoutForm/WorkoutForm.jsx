import React, { useState } from 'react';
import useWorkoutsContext from '../../hooks/useWorkoutsContext';
import classes from './WorkoutForm.module.css';

function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const workout = {
      title,
      load,
      reps,
    };
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      setEmptyFields([]);
      // eslint-disable-next-line no-console
      console.log('new Workout Added', json);
      dispatch({ type: 'CREATE_WORKOUT', payload: json });
    }
  };

  return (
    <form className={classes.create} onSubmit={submitHandler}>
      <h3>Add a New Workout</h3>

      <label htmlFor="title">
        Exercise Title:
        <input
          className={emptyFields.includes('title') ? classes.error : ''}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label htmlFor="load">
        Load (in kg):
        <input
          className={emptyFields.includes('load') ? classes.error : ''}
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
      </label>
      <label htmlFor="reps">
        Reps:
        <input
          className={emptyFields.includes('reps') ? classes.error : ''}
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
      </label>

      <button type="submit">Add Workout</button>
      {error && <div className={classes.error}>{error}</div>}
    </form>
  );
}

export default WorkoutForm;
