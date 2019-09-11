import React ,{Component}from 'react';

class DietTable extends Component{
  state={}

  render(){
   const link=`/${this.props.title}.jpg`
   
  return (
  <>
  
 <img src ={this.props.table} alt="" width="50%" ></img>
<a href={link} download><button   style={{marginLeft:"-330px"}}className="btn btn-outline-primary">Download</button></a> 

    </>
  );
}
}
export default DietTable;



  