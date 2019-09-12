import React ,{Component}from 'react';

class Comment extends Component{
    state={}

    render(){
 
        return (
          
        <>
    
       <div className="card">{this.props.elem}</div>
        
          </>
        );
      


    }

}
export default Comment