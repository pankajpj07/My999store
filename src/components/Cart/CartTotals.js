import React from 'react'

export default function CartTotala({value}) {
    const { cartSubTotal, cartTax , cartTotal, clearCart }=value
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <button type="button" onClick={()=>clearCart()} className="btn btn-outline-danger text-uppercase mb-3 px-5">
                            Clear cart
                        </button>
                        <h5>
                            <span className="text-title">subtotal:</span>
                            <strong>&#8377;{cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Tax:</span>
                            <strong>&#8377;{cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Cart total:</span>
                            <strong>&#8377;{cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
