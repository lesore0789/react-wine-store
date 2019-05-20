import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                const {id, company, img, info, price, title, inCart} = value.detailProduct;
                return (
                    <div className="container py-5">
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                        </div>
                    </div>
                    {/* end of title */}
                    {/* Product Info */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={img} className="img-fluid" alt="product" />
                        </div>
                        {/* Product Text */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                        <h2>{title}</h2>
                        <h4 className="text-title-reg text-muted mt-3 mb-2">
                        Made By: <span>{company}</span>
                        </h4>
                        <h4 className="text-blue">
                        <strong>
                            price: <span>$</span> {price}
                        </strong>
                        </h4>
                        <p className="font-weight-bold mt-3 mb-0">Some Info About This Bottle:</p>
                        <p className="text-muted lead">{info}</p>
                        <div>
                            <Link to="/">
                            <ButtonContainer>Back to Products</ButtonContainer>
                            </Link>
                            <ButtonContainer cart disabled={inCart ? true : false} onClick={()=>{
                                value.addtoCart(id);
                                value.openModal(id);
                                }}>
                                {inCart ? "inCart" : "Add to Cart"}
                            </ButtonContainer>
                        </div>
                        </div>
                    </div>
                    </div>
                )
                }}
            </ProductConsumer>
        )
    }
}

