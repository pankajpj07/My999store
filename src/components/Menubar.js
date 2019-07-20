import React, { Component } from 'react'
import {Link} from "react-router-dom"
import logo from '../logo.png'

export default class Menubar extends Component {
    render() {
        return (
            
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
                    <Link to='/'>
                        <img src={logo} alt="store" className="navbar-brand" style={{width:'7vw'}}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product-list" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">About</Link>
                            </li>
                        </ul>
                        {
                            this.props.authenticated
                            ? <Link to='/cart' className='ml-auto'>
                                <button className="btn btn-outline-success my-2 my-sm-0">
                                <span className="mr-2">
                                    <i className="fas fa-shopping-cart"></i> My cart
                                </span>
                                </button>
                            </Link>
                            : <Link to='/login' className='ml-auto'>
                                <button className="btn btn-outline-success my-2 my-sm-0">
                                    <span className="mr-2">
                                    <i className="fas fa-user-alt" aria-hidden="true"></i> Login
                                    </span>
                                </button>
                            </Link>
                        }
                        
                    </div>
                </nav>
            
        )
    }
}
