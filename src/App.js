import React,{useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './Firebase';
import {useStateValue} from './StateProvider';

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

