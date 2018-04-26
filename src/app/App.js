import React, { Component } from 'react';
import './App.css';
import PassageComponent from '../components/Passage/PassageComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PassageComponent />
        <PassageComponent />
      </div>
    );
  }
}

export default App;
