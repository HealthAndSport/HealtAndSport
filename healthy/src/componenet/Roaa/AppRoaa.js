import React,{Component} from 'react';
import Homepage from './Component/Homepage';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import axios from 'axios';
import {BrowserRouter as Router,  Route,Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component{
   state={
     datalogin:[],
     datasign:[]
   }

  SignUp=(name, email,password)=>{
    console.log(name)
    console.log(email)
    console.log(password)
    axios.post(`http://localhost:9000/Roaa/${name}/${email}/${password}`)
    .then(res=>{
     this.setState({
       datasign:[res.data]
     })
   
    }
    )
    .then( ()=>{
     
      if(this.state.datasign.length>0)
      
      window.location='/Login'
    
    else
    window.location='/SignUp'
  }
    )
   

    }
    
    Login=(input)=>{
     console.log(input)
      axios.post(`http://localhost:9000/Roaa/login`,input)
      .then(res=>{
        console.log(res.data)
        this.setState
        ({ datalogin:res.data})
      })
      
        .then( ()=>{
          if(this.state.datalogin.length>0)
          {
          window.location='/Homepage'
        }
      
      }
        )
       
     
    }



  

  render(){
  return (
    <>
    

    <Router>
  <Route path="/Login"  component={()=> <Login Login={this.Login}/>} />
  <Route path="/Homepage"  component={()=><Homepage/>} />
  <Route path="/SignUp" component={()=> <SignUp SignUp={this.SignUp} /> }/>
    
    
  {/* <Route path="/food" component={Food}/>
  <Route path="/sport" component={Sport}/>
  <Route path="/wieght" component={Weight}/>
  <Route path="/dite" component={Dite}/>
  <Route path="/commnaction" component={Commcation}/> */}
    </Router>
    </>
  );
  
}
}

