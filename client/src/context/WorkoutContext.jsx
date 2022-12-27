import React, { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload,
      };
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter((workout) => workout._id !== action.payload._id),
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function WorkoutsContextProvider({ children }) {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  );
}
