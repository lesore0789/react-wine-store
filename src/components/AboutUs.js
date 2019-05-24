import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AboutUs extends Component {
  render() {
    return (
      <div className='about text-center mx-auto my-auto'>
          <div className="container">
              <div className="row">
                  <div className="col-10 pl-5 ml-5">
                    <h1 className='display-4 text-title-big pl-3 abt'>About Us</h1>
                    <h3 className='text-title-reg pt-3 pl-3 mock'>This is a mock up of a vegan wine company selling bottles online.</h3>
                    <div className="container">
                      <div className="row">
                        <div className="col-12 align-text-center justify-content-center">
                    <h5 className='pt-3 pl-5 invite'>
                        I invite you to visit the 
                        <Link to='/products'> <span className='prod'>Products</span> </Link>
                        page, put items in the cart, 
                    and proceed to checkout and 'pay' via PayPal.
                   The dummy email and password you can use is:
                   <br />Email: lesore0789-buyer@yahoo.com 
                   <br />Password: sandbox100</h5>

                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
