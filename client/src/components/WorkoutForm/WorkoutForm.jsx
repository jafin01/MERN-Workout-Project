import React, { useState } from 'react';
import classes from './WorkoutForm.module.css';

function WorkoutForm() {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

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
      setError(json.message);
    }

    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      // eslint-disable-next-line no-console
      console.log('new Workout Added', json);
    }
  };

  return (
    <form className={classes.create} onSubmit={submitHandler}>
      <h3>Add a New Workout</h3>

      <label htmlFor="title">
        Exercise Title:
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label htmlFor="load">
        Load (in kg):
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
      </label>
      <label htmlFor="reps">
        Reps:
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
      </label>

      <button type="button">Add Workout</button>
      {error && <div className={classes.error}>{error}</div>}
    </form>
  );
}

export default WorkoutForm;
