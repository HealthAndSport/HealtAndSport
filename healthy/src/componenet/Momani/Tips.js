import React ,{Component}from 'react';

class Tips extends Component{
  state={}

  render(){
   
   
  return (
  <>
 
  <div style={{padding:"20px"}}>
   
    {this.props.tip}
   
  
  </div>
    </>
  );
}
}
export default Tips;