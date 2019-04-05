import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Button variant="secondary">Submit</Button>
      </div>
    );
  }
}

export default App;
