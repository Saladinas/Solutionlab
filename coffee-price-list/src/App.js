import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoffeeList from './CoffeeList';
import CoffeeForm from './CoffeeForm';

class App extends Component {

  constructor(props) {
    super(props);

    // var coffee = [{ id: 0, title: "Latte", price: "10", image: "http://sawadacoffee.com/wp-content/uploads/Sawada-Coffee-10DEC2015-003.jpg" },
    // { id: 1, title: "Dark Coffee", price: "7", image: "http://www.legalreader.com/wp-content/uploads/2015/10/Coffee-Cup-Bowl-With-Grains-Images.jpg" },
    // { id: 2, title: "Cappuccino", price: "5", image: "https://www.nespresso.com/ncp/res/uploads/recipes/377c71f2069b1dba47f10aeb701d576d889101ee.jpg" },
    // { id: 3, title: "Milk Coffee", price: "8.8", image: "http://2fhjuw36qc3g36anx54adxd2nje.wpengine.netdna-cdn.com/wp-content/uploads/2015/09/Coffee-6.png" },
    // { id: 4, title: "Milk Coffee", price: "8.8", image: "http://2fhjuw36qc3g36anx54adxd2nje.wpengine.netdna-cdn.com/wp-content/uploads/2015/09/Coffee-6.png" }];

    // sessionStorage.setItem('coffeeList', JSON.stringify(coffee));

    this.buttonState = 'Show form';
    this.state = ({
      showResults: false,
      coffee: JSON.parse(sessionStorage.getItem('coffeeList'))
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
        </div>
      </div>
    );
  }
}

export default App;
