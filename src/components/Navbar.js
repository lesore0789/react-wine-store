import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse"
  };
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show"
        });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="store" className="mr-2" />
          <span className="navbar-brand text-title-big mt-3 ml-1 br1">
            Vegan Vino
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link linko">
                About Us
              </Link>
            </li>
            <li className="nav-item pr-3">
              <Link to="/products" className="nav-link linko">
                Products
              </Link>
            </li>
          </ul>
          <Link to="/cart">
            <button type="button" className="btn btn-outline-light carto1">
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              My Cart
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}
