import React, { Component } from 'react';
import Map from './Components/map';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Map/>
        </div>
      </div>
    );
  }
}

export default App;
