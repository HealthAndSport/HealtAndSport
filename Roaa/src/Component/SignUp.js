import React,{Component} from 'react';

export default class SignUp extends Component{
 state={
      name:'',
      email:'',
      password:''
 }
    SignUp=(input)=>{
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
        <input type="text" placeholder="enter your name" name="Name"  onChange={this.SignUp} />
    </label>
    <label>  Email
        <input type="email" placeholder="enter your email" name="Email" onChange={this.SignUp} />
    </label>
    <label>  password
        <input type="Password" placeholder="enter your password" name="Password" onChange={this.SignUp}/>
    </label>
    <button onClick={this.props.SignUp.bind(this,this.state.name)}>SignUp</button>

    </>
  );
  
}
}

