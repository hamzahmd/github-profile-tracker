import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/UI/Navbar';
import Users from './Components/Users/Users';

// Class Based Components
class App extends Component {
  
  render(){   
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users/>
        </div>
      </div>
    );
  }
  
}

export default App;
 