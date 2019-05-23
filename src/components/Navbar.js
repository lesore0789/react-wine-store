import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-light">
                <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand mr-2" /><span className="navbar-brand text-title-big mt-3 ml-1 br1">Vegan Vino</span>
                </Link>
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
                    <Link to='/cart' >
                        <button type="button" className="btn btn-outline-light carto1">
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />                        
                            </span>
                                My Cart
                        </button>     
                    </Link>
                    <Link to='/cart' >
                        <button type="button" className="btn btn-outline-light carto2">
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />                        
                            </span>
                                
                        </button>     
                    </Link>
        </nav> )
    }}