import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <Person name="Mike" age="30" />
        <Person name="Kim" age="18">My hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
