import React,{useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './Firebase.js';
import {useStateValue} from './StateProvider';
import Payment from './Payment'
import { Elements } from '@stripe/react-stripe-js'; 
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';


const promise =loadStripe(
  'pk_test_51KKmfASAhLjMG8qiCg00sIqGyaxFdMsO5ATzTquS5DKYnp8U3QhSamhfVjX61MK6gmWxXjmQ5vhewIfXME8qV4kd00VCXezkAd')
  
  function App() {
    const[{},dispatch]=useStateValue();


    useEffect(()=>{
    //It only will runs after component is loaded
    auth.onAuthStateChanged(
      authUser=>{
      console.log("USER IS : ",authUser);
      if(authUser){

        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }
      else{
        
           dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })

},[]);
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Checkout">
        <Header />
        <Checkout />
        </Route>
        <Route path="/orders">
        <Header />
        <Orders />
        </Route>
        <Route path="/Payments">
          <Header />
          <Elements stripe={promise} >
          <Payment />
          </Elements>
        </Route>
        
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;

