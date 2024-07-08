import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainRoutes from './components/MainRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <MainRoutes />
        
        </div>
      </div>
    </Router>
  );
};

export default App;
