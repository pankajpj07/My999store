import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import fire,{provider} from '../fire'

const loginstyle={
    width:"90%",
    maxWidth:"450px",
    margin:"20px auto",
    border:"1px solid #ddd",
    boxShadow:"1px 2px 19px 1px",
    borderRadius:"5px",
    padding:"20px"
}

export default class Login extends Component {
    constructor(props){
        super(props)
        this.authWithFacebook=this.authWithFacebook.bind(this)
        this.authWithEmailPassword=this.authWithEmailPassword.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.state={
            username:'',
            password:''
        }
    }
    
    authWithFacebook=()=>{
        fire.auth().signInWithPopup(provider).then(function(result) {
           /* 
           var token = result.credential.accessToken;
            var user = result.user
            */
          }).catch(function(error) {
            
            /*var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            // ...*/
          });
    }
    authWithEmailPassword=(event)=>{
        event.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.username,this.state.password).then((u)=>{}).catch((error)=>{
            alert(error)
        })

    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        
        return (
                        
        <div>
            <div className="container mt-5 d-none d-lg-block pb-5" style={loginstyle}>
                            <form onSubmit={(event)=> { this.authWithEmailPassword(event)}} ref={(form)=> {this.loginForm=form} }  className="login-form mt-5">
                            <div className="text-center">
                                <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" style={{width:'40%',height:'auto'}} alt="Avatar"/>
                            </div>  
                            
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className='fas fa-user-circle'></i></span>
                                        </div>
                                        <input type="email" value={this.state.username}
                    onChange={this.handleChange} name="username" className="form-control" placeholder="Email id" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-7  mx-auto col-sm-7 col-md-7 col-lg-8'>
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
                                <div className='col-xs-6 mx-auto mt-3'>
                                    <button type="submit" className="btn btn-outline-success text-uppercase mb-3 px-4">
                                        Login    
                                    </button>
                                    <Link to='/register'>
                                        <button type="button" className="ml-2 btn btn-outline-danger text-uppercase mb-3 px-4">
                                            Register   
                                        </button>
                                    </Link>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className='col-xs-6 mx-auto'>
                                    <div className="clearfix">
                                    <Link to='/forgot-password'>
                                            Forgot Password?
                                    </Link>
                                    </div>
                                </div>
                            </div>
                            
                     </form>
                        <div className="row">
                            <div className='col-xs-6 mx-auto'>
                                <div className="clearfix">
                                    <button className="btn fb-btn rounded mt-2" onClick={this.authWithFacebook}>login with facebook</button>
                                </div>
                            </div>
                        </div>
                </div>
                
                <div className="container mt-5 d-lg-none">
                            <form onSubmit={(event)=> { this.authWithEmailPassword(event)}} ref={(form)=> {this.loginForm=form} }  className="login-form mt-5">
                            <div className="text-center">
                                <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" style={{width:'25%',height:'auto'}} alt="Avatar"/>
                            </div>  
                            
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3 ">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className='fas fa-user-circle'></i></span>
                                        </div>
                                        <input type="email" value={this.state.username}
                    onChange={this.handleChange} name="username" className="form-control" placeholder="Email id" required="required"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-7  mx-auto col-sm-7 col-md-7 col-lg-8'>
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
                                <div className='col-xs-6 mx-auto mt-3'>
                                    <button type="submit" className="btn btn-outline-success text-uppercase mb-3 px-4">
                                        Login    
                                    </button>
                                    <Link to='/register'>
                                        <button type="button" className="ml-2 btn btn-outline-danger text-uppercase mb-3 px-4">
                                            Register   
                                        </button>
                                    </Link>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className='col-xs-6 mx-auto'>
                                    <div className="clearfix">
                                        <Link to='/forgot-password'>
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                     </form>
                        <div className="row">
                            <div className='col-xs-6 mx-auto'>
                                <div className="clearfix">
                                    <button className="btn fb-btn rounded mt-2" onClick={this.authWithFacebook}>login with facebook</button>
                                </div>
                            </div>
                        </div>
                </div> 
                
        </div>

            
                            
        )
    }
}