import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoffeeList from './CoffeeList';

var data = [{ id: 0, name: "Latte" },
{ id: 1, name: "Dark Coffee" },
{ id: 2, name: "Cappuccino" },
{ id: 3, name: "Milk Coffee" }];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coffee price list</h2>
        </div>
        <div className="App-intro">
          <div className="row">
            <CoffeeList data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
