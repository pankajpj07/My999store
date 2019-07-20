import {Route,Switch,Redirect} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import PageNotFound from './components/PageNotFound'
import Modal from './components/Modal'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import fire from './fire'
import Forgot from './components/Forgot'
import Menubar from './components/Menubar'

import React, { Component } from 'react'

export default class App extends Component {
      constructor(props){
        super(props);
        this.logout=this.logout.bind(this)
        this.state={
          user:{}
        }

      }
      componentDidMount(){
        this.authListener()
      }
      authListener(){
        fire.auth().onAuthStateChanged((user)=>{
          if(user){
            this.setState({user})
          }
          else{
            this.setState({user:null})
          }
        })
      }
      logout(){
        fire.auth().signOut()
    }
      
        render() {
          
    return (
      <React.Fragment>
      {this.state.user 
      ? 
      <div>
      <Redirect to="/"/>
      <Menubar authenticated={true}/>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product-list' component={ProductList}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/details' component={Details}/>
          <Route path='/*/*' component={PageNotFound}/>
      </Switch>
      <button type="button" onClick={this.logout} className="btn btn-outline-danger text-uppercase  px-5" style={{position:'relative',bottom:'0',right:'0'}}>
                            Logout
                        </button>
      </div>
    :
      <div>
        <Redirect to="/login"/>
        <Menubar authenticated={false}/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/product-list' component={ProductList}/>
            <Route exact path='/cart' component={()=>{
              //alert("Oops!! It seems like you have to log in first!") 
              return(<Redirect to="/login"/>)}
              }/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/forgot-password' component={Forgot}/>
            <Route exact path='/details' component={Details} />
            <Route path='/*/*' component={PageNotFound}/>
       </Switch>
      </div>
      
      }
      <Modal/>
    </React.Fragment>
     
    )
  }
}

 



