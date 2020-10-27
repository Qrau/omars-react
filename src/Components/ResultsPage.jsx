import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { useState } from "react";
import ResultsPage from "./ResultsPage";

class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      brand: "kinder",
    };
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
    const userChoice = "Coca Cola Light";
    return (
      <div className="ExplorePage">
        <button onClick={() => this.setState({ brand: userChoice })}>
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

export default ExplorePage;
