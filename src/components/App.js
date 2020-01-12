import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // We cannot update the state directly, so...

    // 1. get a copy of what we want
    const fishes = { ...this.state.fishes };

    // update with the new one
    fishes[`fish${Date.now()}`] = fish;

    // and update the state with the new data
    this.setState({
      fishes: fishes
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"></Header>
        </div>
        <Order></Order>
        <Inventory addFish={this.addFish}></Inventory>
      </div>
    );
  }
}

export default App;
