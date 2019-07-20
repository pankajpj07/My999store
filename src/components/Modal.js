import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal}=value
                    const {img,title,price}=value.modalProduct
                    if(!modalOpen){
                        return null
                    }
                    else{
                      return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id='modal' className="col-8 p-5 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <button className=" float-right" onClick={()=>closeModal()}><i className="fa fa-times" aria-hidden="true"></i></button>
                                        <h5>Item added to cart</h5>
                                        <hr/>
                                        <img src={img} alt="product" className='img-fluid'/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price : &#x20B9;{price}</h5>
                                        <hr/>
                                        <Link to='/product-list'>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                                More products
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer cart onClick={()=>closeModal()}>
                                                Go to the cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                      )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainwhite);
    border-radius:24px;
}
`