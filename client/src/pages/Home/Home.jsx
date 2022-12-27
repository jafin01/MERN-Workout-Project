import { React, useEffect } from 'react';

import WorkoutDetails from '../../components/WorkoutDetails/WorkoutDetails';
import WorkoutForm from '../../components/WorkoutForm/WorkoutForm';
import useWorkoutsContext from '../../hooks/useWorkoutsContext';
import classes from './Home.module.css';

function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();

      if (response.ok) {
        const fetchedWokouts = json.reverse();
        dispatch({ type: 'SET_WORKOUTS', payload: fetchedWokouts });
      }
    };

    fetchWorkout();
  }, []);

  return (
    <div className={classes.home}>
      <div className={classes.workouts}>
        {workouts
          && workouts.map((workout) => <WorkoutDetails key={workout._id} workout={workout} />)}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
