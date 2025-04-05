import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import './Sidebar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <Router> 
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>  
      </div>    
    </div>
    </Router> 
  );
};

export default App;