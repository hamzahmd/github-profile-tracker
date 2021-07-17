import React, { Component } from 'react';
import './App.css';

// Class Based Components
class App extends Component {
  render(){
    const name = 'Hamza Ahmad';
    const loading = false;
    return (
      <div className="App">
        {loading ? <h2>loading...</h2>:<h1>Hello {name}</h1> }
      </div>
    );
  }
  
}

export default App;
