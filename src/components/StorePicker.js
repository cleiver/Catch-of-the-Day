import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  textInput = React.createRef();

  goToStore = event => {
    event.preventDefault();

    const storeName = this.textInput.current.value;

    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        {/* this is how we write comments in react */}
        {/* we cannot return siblings tags, we must wrap it in a parent 😒 */}

        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.textInput}
            required
            placeholder="Store name"
            defaultValue={getFunName()}
          ></input>
          <button type="submit">Visit Store 🚶</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
