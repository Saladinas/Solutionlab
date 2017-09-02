import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoffeeList from './CoffeeList';
import CoffeeForm from './CoffeeForm';

class App extends Component {

  constructor(props) {
    super(props);

    this.buttonState = 'Show form';
    this.state = ({
      showResults: false,
      coffee: [{ id: 0, title: "Latte", price: "10", image: "http://sawadacoffee.com/wp-content/uploads/Sawada-Coffee-10DEC2015-003.jpg" },
      { id: 1, title: "Dark Coffee", price: "7", image: "http://www.legalreader.com/wp-content/uploads/2015/10/Coffee-Cup-Bowl-With-Grains-Images.jpg" },
      { id: 2, title: "Cappuccino", price: "5", image: "https://www.nespresso.com/ncp/res/uploads/recipes/377c71f2069b1dba47f10aeb701d576d889101ee.jpg" },
      { id: 3, title: "Milk Coffee", price: "8.8", image: "http://2fhjuw36qc3g36anx54adxd2nje.wpengine.netdna-cdn.com/wp-content/uploads/2015/09/Coffee-6.png" },
      { id: 4, title: "Milk Coffee", price: "8.8", image: "http://2fhjuw36qc3g36anx54adxd2nje.wpengine.netdna-cdn.com/wp-content/uploads/2015/09/Coffee-6.png" }]
    })

    this.addCoffee = this.addCoffee.bind(this);
    this.removeCoffee = this.removeCoffee.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  addCoffee(data) {
    this.setState({
      coffee: this.state.coffee.concat([data])
    });
  }

  removeCoffee(id) {
    this.setState({
      coffee: this.state.coffee.filter((coffee) => coffee.id !== id)
    });
  }

  changeState() {
    if (this.state.showResults === true) {
      this.buttonState = 'Show form'
    } else {
      this.buttonState = 'Hide form'
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
          {/* <CoffeeForm addCoffee={this.addCoffee} /> */}
          {this.state.showResults ? <CoffeeForm addCoffee={this.addCoffee} /> : null}
          <button type="button" onClick={this.changeState} className="btn btn-primary btn-lg Add-coffee-button">{this.buttonState}</button>
          <hr />
          <CoffeeList removeCoffee={this.removeCoffee} data={this.state.coffee} />
        </div>
      </div>
    );
  }
}

export default App;
