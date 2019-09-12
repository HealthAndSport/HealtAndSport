import React,{Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class SignUp extends Component{
 state={
      name:'',
      email:'',
      password:'',
      validation: {
        name: /^[a-zA-Z]{3,}$/,
        email:/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/,
        password: /^[a-zA-Z0-9]{5,15}$/,
       
      },
      isValidname: false,
      isValidemail: false,
      isValidpassword: false,
      

 }
    SignUp=(e)=>{
      this.setState({
        [e.target.name]: e.target.value,
        [`isValid${e.target.name}`]: this.state.validation[e.target.name].test(e.target.value)
      })
  

      
    }
  
  render(){
  return (
    <>
    <Navbar/>
    
    <form style={{  margin: "10% 30% 30% 35%",padding:"80px",borderRadius:"10px",fontFamily:' Amaranth' ,fontSize:'20px',width:"100%",border:"2px solid" ,width: "30%" }}>
  <div className="form-group">
  <h1 style={{textAlign:'center'}}><img style={{maxWidth:'100px', maxHeight:'100px', textAlign: "center", margin: "1%  20%" }} src={require('../Assets/add-friend.svg')}></img>SignUp</h1>
    <label forhtml="exampleInputEmail1">Email:</label>
    <input type="email"name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.SignUp}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label forhtml="exampleInputPassword1">Password:</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.SignUp}/>
  </div>
  <div className="form-group">
    <label >Name:</label>
    <input type="text" className="form-control"   name="name" placeholder="name" onChange={this.SignUp}/>
  </div>
 
  <button  onClick={

             this.state.isValidname &&
               this.state.isValidemail &&
               this.state.isValidpassword
               ?
               this.props.SignUp.bind(
                 this,
                 this.state.name,
                
                 this.state.email,
                 this.state.password,
               
               ) : ""} type="submit" className="btn btn-success"style={{width:"300px"}}>Submit</button>
</form> 
<Footer/>
</>
  );  
}
}


   
  
