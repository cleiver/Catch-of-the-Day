import React from 'react';
import Header from './Header';
import Fish from './Fish';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

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

  addToOrder = key => {
    const order = { ...this.state.order };

    // update an existing order or create a new one
    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"></Header>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              ></Fish>
            ))}
          </ul>
        </div>
        {/* we could do {...this.state} and have the same result */}
        {/* but if we put more props on state they would be passed to the order as well */}
        <Order fishes={this.state.fishes} order={this.state.order}></Order>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        ></Inventory>
      </div>
    );
  }
}

export default App;
