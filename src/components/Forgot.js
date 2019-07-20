import React, { Component } from 'react'
import fire from '../fire';


const loginstyle={
    width:"90%",
    maxWidth:"450px",
    margin:"20px auto",
    border:"1px solid #ddd",
    boxShadow:"1px 2px 19px 1px",
    borderRadius:"25px",
    padding:"20px",


}

export default class Forgot extends Component {
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.resetPassword=this.resetPassword.bind(this)
        this.state={
            email:''
        }

    }
    resetPassword(event){
        event.preventDefault()

        fire.auth().sendPasswordResetEmail(this.state.email).then(function() {
            alert("Please check your Email. Password reset link has been sent. Redirecting you to the login page")
            window.location.reload()
        // Email sent.
        }).catch(function(error) {
            alert("We are not able to find the provided email in our database. Please provide the correct email or create a new account")
        });

    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
            <div className="container mt-5  pb-5" style={loginstyle}>
                            <form onSubmit={(event)=> { this.resetPassword(event)}} ref={(form)=> {this.loginForm=form} }  className="login-form mt-5">
                            <div className="text-center">
                                <img src="https://www.campriverridge.org/uploads/1/1/5/3/115340305/de9fb5-c8bff58a7790477e95f50c65620ecfe0-mv2_orig.png" style={{width:'40%',height:'auto'}} alt="Avatar"/>
                            </div>  
                            
                            <div className="row">
                                <div className='col-7 mx-auto col-sm-7 col-md-7 col-lg-8'>
                                    <div className="input-group mt-3">
                                        <input type="email" value={this.state.email}
                    onChange={this.handleChange} name="email" className="form-control" placeholder="Enter your email id" required="required"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className='col-xs-6 mx-auto mt-3'>
                                    <button type="submit" className="btn btn-outline-success text-uppercase mb-3 px-4">
                                        Reset your password    
                                    </button>
                                </div>
                                
                            </div>
                           
                            
                     </form>
                       
                </div>
                
                
        </div>
        )
    }
}
