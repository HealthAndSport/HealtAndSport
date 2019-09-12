import React ,{Component}from 'react';

class DietTable extends Component{
  state={}

  render(){
   const link=`/${this.props.title}.jpg`
   
  return (
  <>
  
 <img src ={link} alt="" width="60%" height="90%" style={{position:"relative",bottom:"-30px",left:"-102px"}} ></img>
<a href={link} download><button  className="btn btn-outline-success">Download</button></a> 

    </>
  );
}
}
export default DietTable;



  