import React, { Component } from 'react';


export default class ThankYou extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title-reg">
                    <h1 className='display-2'>THANK YOU.</h1>
                    <h3 className='pt-3'>Your order was completed sucessfully.</h3>
                </div>
                <div className="row">
                <div className="col-5 mx-auto text-right py-5 pl-4">
                    <i className="far fa-envelope pt-3"></i>
                </div>
                <div className="col-5 mx-auto py-5">
                    <p className='pt-4'>An email receipt including the details about your order has been sent to you. Please keep it for your records.</p>
                </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
  }
}
