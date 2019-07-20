import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import Product from '../components/Product'
export default class Home extends Component {
    render() {
        return (
            <div className="container">
                    <hr/>               
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/1571146/pexels-photo-1571146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://images.pexels.com/photos/1345082/pexels-photo-1345082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>                
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <br/>
                    <br/>
                    <h3 className="section-title section-title-bold-center">
                        <b></b>
                            <span className="section-title-main" style={{color:'rgb(7, 61, 100)'}}><Link to="/product-list" className="nav-link">Products</Link></span>
                        <b></b>
                    </h3>
                    <div className="row">
                            <ProductConsumer>
                                {(val)=>{
                                    var a=0
                                    return val.products.map((product)=> { 
                                        a+=1
                                        if (a>3){
                                            return null;
                                        } 
                                        else{
                                            return <Product key={product.id} product={product}></Product>
                                        }
                                        
                                        }
                                    ) 
                                    
                                    }
                                }
                            </ProductConsumer>
                    </div>
                    <br/>
                    <br/>
                    <h3 className="section-title section-title-bold-center">
                        <b></b>
                            <span className="section-title-main" style={{color:'rgb(7, 61, 100)'}}><Link to="/product-list" className="nav-link">Services</Link></span>
                        <b></b>
                    </h3>
            </div>
          
        )
    }
}
