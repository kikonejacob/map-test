import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Components/map';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Map isInteractive={false} />
        </div>
      </div>
    );
  }
}

export default App;
