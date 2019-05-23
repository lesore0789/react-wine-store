import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='home text-center pt-5 mx-auto my-auto'>
        <h1 className='display-3 text-title-big pr-3'>Vegan Vino</h1>
        <h3 className='text-title-reg pt-3 pr-3'>A place for happy grapes</h3>
        <h5>
            <Link to='/about'>
            <button type="button" className="btn btn-outline-dark">Learn More</button>
            </Link>
        </h5>
      </div>
    )
  }
}
