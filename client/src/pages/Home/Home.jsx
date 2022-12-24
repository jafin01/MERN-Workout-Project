import { useState } from "react";
import { useEffect } from "react";
import WorkoutDetails from "../../components/WorkoutDetails/WorkoutDetails";
import classes from "./Home.module.css";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkout();
  }, []);

  return (
    <div className="home">
      <div className={classes.workouts}>
        {workouts &&
          workouts.map((workout) => <WorkoutDetails key={workout._id} workout={workout} />)}
      </div>
    </div>
  );
};

export default Home;
