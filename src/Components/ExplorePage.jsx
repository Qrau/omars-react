import React, { Component } from "react";

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      products: [],
    };

    // code was needed to do get input values
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ brand: event.target.value });
  }

  handleSubmit() {}
  // END code was needed to do get input values

  // Fetching from API open food facts
  componentDidMount() {
    this.fetchThis();
  }

  componentWillUpdate() {
    this.fetchThis();
  }

  fetchThis(brand) {
    https: fetch(
      `https://en-en.openfoodfacts.org/brand/${this.state.brand}/1.json`
    )
      .then((data) => data.json())
      .then((products) => {
        this.setState({ products: products.products });
      });
  }
  // END Fetching from API open food facts

  render() {
    return (
      <div>
        {/* <input type="text" onChange={this.updateInput}></input>
        <input type="submit" onClick={this.handleSubmit}></input> */}

        {this.state.products.length !== 0 ? (
          this.state.products.map((product) => <h5>{product.product_name}</h5>)
        ) : (
          <h1>LOADING...</h1>
        )}
      </div>
    );
  }
}
