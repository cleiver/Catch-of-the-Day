import React from 'react';

class EditFishForm extends React.Component {
  handleChange = event => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };

    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.fish.name}
          onChange={this.handleChange}
          ref={this.nameRef}
          placeholder="Name"
        ></input>
        <input
          type="text"
          name="price"
          value={this.props.fish.price}
          onChange={this.handleChange}
          ref={this.priceRef}
          placeholder="Price"
        ></input>
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
          ref={this.statusRef}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          ref={this.descRef}
          placeholder="Desc"
          onChange={this.handleChange}
        ></textarea>
        <input
          type="text"
          name="image"
          value={this.props.fish.image}
          onChange={this.handleChange}
          ref={this.imageRef}
          placeholder="Image"
        ></input>
      </div>
    );
  }
}

export default EditFishForm;
