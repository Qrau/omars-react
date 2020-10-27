import React, { Component } from "react";

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      products: [],
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ brand: event.target.value });
  }

  handleSubmit() {
    //Send state to the server code dd
  }

  componentDidMount() {
    this.fetchThis();
  }

  componentWillUpdate() {
    this.fetchThis();
  }

  fetchThis(brand) {
    fetch(`https://en-en.openfoodfacts.org/brand/${this.state.brand}/1.json`)
      .then((data) => data.json())
      .then((products) => {
        this.setState({ products: products.products });
      });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateInput}></input>
        <input type="submit" onClick={this.handleSubmit}></input>
        <button onClick={() => this.setState({ brand: "Coca Cola" })}>
          change brand
        </button>
        {this.state.products.length !== 0 ? (
          this.state.products.map((product) => <h5>{product.product_name}</h5>)
        ) : (
          <h1>Product are loading</h1>
        )}
      </div>
    );
  }
}
