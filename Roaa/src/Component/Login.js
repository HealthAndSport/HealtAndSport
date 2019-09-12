import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import Footer from './Footer';
export default class Login extends Component{
 
state={
    email:'',
    password:''
}
  
Login=(input)=>{
  console.log(input.target.name);
  console.log(input.target.value);
    this.setState({
      
        [input.target.name]: input.target.value
    })
  //   console.log(input.target.value);
  //   console.log(input.target.name);

  }
  render(){
  return (
    <>
   <Navbar/>
       {/* <img style={{maxWidth:'100px', maxHeight:'100px',   padding: "70px 0px", textAlign: "center" }} src={require('../Assets/facebook.svg')}></img> */}
        <div className="col-6 col-sm-3" style={{  margin: "10% 20% 10% 40%",padding:"80px",borderRadius:"10px",fontFamily:' Amaranth' ,fontSize:'20px',width:"100%",border:"2px solid" ,width: "30%" }}>
        <div className="form-group" > <img style={{maxWidth:'100px', maxHeight:'100px', textAlign: "center", margin: "1%  20%" }} src={require('../Assets/log-in.svg')}></img>
        <label for="exampleInputEmail1"style={{color:"green"}}>  Email
             <input className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter your name"  name="email" onChange={this.Login}/>
        </label>
        </div>
        <div className="form-group">
        <label for="exampleInputPassword1" style={{color:"green"}}>  password
               <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" name="password" onChange={this.Login}/>
       </label>
       </div>
      <button  className="btn btn-success " style={{width:"200px"}} onClick={this.props.Login.bind(this,this.state)}>Login</button>
       <a href="/SignUp"style={{textAlign: "center"}}>Create an Account.....</a>
      </div>
      <Footer/>
    </>
  );
  
}
}

