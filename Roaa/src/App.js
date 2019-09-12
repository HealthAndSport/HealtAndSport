import React,{Component} from 'react';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
// import axios from axios;
import {BrowserRouter as Router,  Route } from 'react-router-dom'


export default class App extends Component{

  SignUp=(input)=>{
    // axios.get("https://localhost/9000/Roaa/SignUp")
    console.log(input)

    }




  Login=(e)=>{
  console.log(e)
  }
  // SignUp=(e)=>{
  //   console.log(e)
  //   }

  render(){
  return (
    <>
    <Router>
  <Route path="/SignUp" component={()=> <SignUp   SignUp={this.SignUp} /> }/>
  <Route path="/Login"  component={()=> <Login   Login={this.Login} />} />
      {/* <SignUp SignUp={this.SignUp} />  */} 
     {/* <Login Login={this.Login}/>  */}
    </Router>
    </>
  );
  
}
}

