import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/UI/Navbar';
import UserItem from './Components/Users/UserItem';

// Class Based Components
class App extends Component {
  
  render(){   
    return (
      <div className="App">
        <Navbar />
        <UserItem/>
      </div>
    );
  }
  
}

export default App;
 