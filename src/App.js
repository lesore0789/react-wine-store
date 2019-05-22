import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import ThankYou from './components/ThankYou';
import Home from './components/Home';
import AboutUs from './components/AboutUs';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/about" component={AboutUs} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/thankyou" component={ThankYou} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
