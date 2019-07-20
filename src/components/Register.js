import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import fire , {provider} from '../fire'
const registerstyle={
    width:"90%",
    maxWidth:"450px",
    margin:"20px auto",
    border:"1px solid #ddd",
    boxShadow:"1px 2px 19px 1px",
    borderRadius:"5px",
    padding:"20px"
}

export default class Register extends Component {
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.signUpWithEmailPassword=this.signUpWithEmailPassword.bind(this)
        this.authWithFacebook=this.authWithFacebook.bind(this)
        this.state={
            email:'',
            password:'',
            cpassword:'',
            phone:''

        }
    }
    signUpWithEmailPassword=(event)=>{
        event.preventDefault()
        if(this.state.cpassword!==this.state.password){
                alert("Password do not match. Please check your password")
        }
        else{
            
            fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{}).catch((error)=>{
                alert(error)
            })
            
            }
        }
        
 authWithFacebook=()=>{
    fire.auth().signInWithPopup(provider).then(function(result) {
        /*
        var token = result.credential.accessToken;
        var user = result.user;
        
        */
      }).catch(function(error) {
         /* 
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential; 
        */
        
      });
}

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
                <div className="container mt-5 d-none d-lg-block px-5" style={registerstyle}>
                            <form className="login-form mt-5">
                            <div className="text-center">
                                <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" style={{width:'40%',height:'auto'}} alt="Avatar"/>
                            </div>  
                            
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i class="fas fa-envelope"></i></span>
                                        </div>
                                        <input type="email" value={this.state.email}
                    onChange={this.handleChange} name="email" className="form-control" placeholder="Email id" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i class="fas fa-phone"></i></span>
                                        </div>
                                        <input type="tel" value={this.state.phone}
                    onChange={this.handleChange} name="phone" className="form-control" placeholder="Mobile number" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className='fas fa-key'></i></span>
                                        </div>
                                        <input type="password" value={this.state.password}
                    onChange={this.handleChange} name="password" className="form-control" placeholder="Password" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className='fas fa-key'></i></span>
                                        </div>
                                        <input type="password" value={this.state.cpassword}
                    onChange={this.handleChange} name="cpassword" className="form-control" placeholder="Confirm Password" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-xs-6 mx-auto mt-3'>
                                    <button type="button" onClick={this.signUpWithEmailPassword} className="btn btn-outline-success text-uppercase mb-3 px-4">
                                        Register    
                                    </button>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className='col-xs-6 mx-auto'>
                                    <div className="clearfix">
                                        <Link to='/login'>Already a member?</Link>
                                    </div>
                                </div>
                            </div>
                            
                     </form>
                        <div className="row">
                            <div className='col-xs-6 mx-auto'>
                                <div className="clearfix">
                                    <button className="btn fb-btn rounded mt-2" onClick={this.authWithFacebook}>Signup with facebook</button>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="container d-lg-none">
                            <form className="login-form mt-5">
                            <div className="text-center">
                                <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" style={{width:'25%',height:'auto'}} alt="Avatar"/>
                            </div>  
                            
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i class="fas fa-envelope"></i></span>
                                        </div>
                                        <input type="email" value={this.state.email}
                    onChange={this.handleChange} name="email" className="form-control" placeholder="Email id" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i class="fas fa-phone"></i></span>
                                        </div>
                                        <input type="tel" value={this.state.phone}
                    onChange={this.handleChange} name="phone" className="form-control" placeholder="Mobile number" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className='fas fa-key'></i></span>
                                        </div>
                                        <input type="password" value={this.state.password}
                    onChange={this.handleChange} name="password" className="form-control" placeholder="Password" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className='fas fa-key'></i></span>
                                        </div>
                                        <input type="password" value={this.state.cpassword}
                    onChange={this.handleChange} name="cpassword" className="form-control" placeholder="Confirm Password" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-xs-6 mx-auto mt-3'>
                                    <button type="submit" onClick={this.signUpWithEmailPassword} className="btn btn-outline-success text-uppercase mb-3 px-4">
                                        Register    
                                    </button>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className='col-xs-6 mx-auto'>
                                    <div className="clearfix">
                                        <Link to='/login'>Already a member?</Link>
                                    </div>
                                </div>
                            </div>
                            
                     </form>
                        <div className="row">
                            <div className='col-xs-6 mx-auto'>
                                <div className="clearfix">
                                    <button className="btn fb-btn rounded mt-2" onClick={this.authWithFacebook}>Signup with facebook</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div> 
        )
    }
}
