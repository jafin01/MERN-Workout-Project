import { useContext } from 'react';

import { WorkoutsContext } from '../context/WorkoutContext';

function useWorkoutsContext() {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error('useWorkoutContext must be used inside an WorkoutContextProvider');
  }

  return context;
}

export default useWorkoutsContext;
