import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoffeeList from './CoffeeList';
import CoffeeForm from './CoffeeForm';

class App extends Component {

  constructor(props) {
    super(props);

    this.buttonState = 'Show form';

    if (JSON.parse(sessionStorage.getItem('coffeeList')) !== null) {
      var coffeeList = JSON.parse(sessionStorage.getItem('coffeeList'));
    } else {
      coffeeList = [];
    }

    this.state = ({
      showResults: false,
      coffee: coffeeList
    })

    this.addCoffee = this.addCoffee.bind(this);
    this.removeCoffee = this.removeCoffee.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  addCoffee(newCoffee) {
    if (JSON.parse(sessionStorage.getItem('coffeeList')) !== null) {
      var newSessionData = JSON.parse(sessionStorage.getItem('coffeeList')).concat([newCoffee]);
    } else {
      newSessionData = [];
      newSessionData.push(newCoffee)
    }

    sessionStorage.setItem('coffeeList', JSON.stringify(newSessionData));

    this.setState({
      coffee: JSON.parse(sessionStorage.getItem('coffeeList'))
    });
  }

  removeCoffee(id) {
    var newSessionData = JSON.parse(sessionStorage.getItem('coffeeList')).filter((coffee) => coffee.id !== id);
    sessionStorage.setItem('coffeeList', JSON.stringify(newSessionData));

    this.setState({
      coffee: JSON.parse(sessionStorage.getItem('coffeeList'))
    });
  }

  changeState() {
    if (this.state.showResults === true) {
      this.buttonState = ' Show form'
    } else {
      this.buttonState = ' Hide form'
    }
    
    this.setState({
      showResults: !this.state.showResults,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coffee price list</h2>
        </div>
        <div className="App-intro container-fluid">
          {this.state.showResults ? <CoffeeForm addCoffee={this.addCoffee} /> : null}
          <button type="button" onClick={this.changeState} className="btn btn-primary btn-lg Middle Add-coffee-button">
            {!this.state.showResults ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : null}
            {this.state.showResults ? <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span> : null}
            {this.buttonState}
          </button>
          <hr />
          {this.state.coffee ? <CoffeeList removeCoffee={this.removeCoffee} data={this.state.coffee} /> : null}
          {this.state.coffee.length === 0 ? <h2 className="text-center">Add some coffees!</h2> : null}
        </div>
      </div>
    );
  }
}

export default App;
