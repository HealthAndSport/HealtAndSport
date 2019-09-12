import React,{Component} from 'react';

export default class Login extends Component{
 
state={
    // name:'',
    // password:''
}
  
Login=(input)=>{
    this.setState({
        [input.target.name]: input.target.value
    })
  //   console.log(input.target.value);
  //   console.log(input.target.name);

  }
  render(){
  return (
    <>
        <label>  Name
             <input type="text" placeholder="enter your name" name="Name" onChange={this.Login}/>
        </label>
        <label>  password
             <input type="Password" placeholder="enter your password" name="Password" onChange={this.Login}/>
       </label>
    <button onClick={this.props.Login.bind(this,this.state)}>Login</button>
    </>
  );
  
}
}

