import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };

  render() {
    const fish = this.props.details;
    const isAvailable = fish.status === 'available';

    return (
      <li className="menu-fish">
        <img src={fish.image} alt={fish.name}></img>
        <h3 className="fish-name">
          {fish.name}
          <span className="price">{formatPrice(fish.price)}</span>
        </h3>
        <p>{fish.desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? '➕ Add to Cart' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
