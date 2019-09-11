import React ,{Component}from 'react';

class Tips extends Component{
  state={}

  render(){
   
   
  return (
  <>
 
  <div>
      
  <ul>
      <li>{this.props.tip}</li>
  </ul>
  </div>
    </>
  );
}
}
export default Tips;