import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

// Class Based Components
class App extends Component {
  
  render(){   
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
  
}

export default App;
 