import React from 'react'

export default function CartItem({item, value}) {
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;
    return (
    <div className='row my-3 text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img src={img} style={{height:'5rem'}} className='img-fluid' alt='product' />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
          <span className='d-lg-none'>Product :</span>
          {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Price :</span>
        ${price}
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
            <div>
                <span className='btn btn-black mx-1' onClick={()=>decrement(id)}><i class="fas fa-minus"></i></span>
                <span className='btn btn-black mx-1'>{count}</span>
                <span className='btn btn-black mx-1' onClick={()=>increment(id)}><i class="fas fa-plus"></i></span>
            </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon' onClick={()=>removeItem(id)}>
            <i className='fas fa-trash'></i>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>Item Total: ${total}</strong>
      </div>
    </div>
  )
}
