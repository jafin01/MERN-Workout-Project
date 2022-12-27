import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import Home from './pages/Home/Home';

function App() {
  return (
    <WorkoutsContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </WorkoutsContextProvider>
  );
}

export default App;
