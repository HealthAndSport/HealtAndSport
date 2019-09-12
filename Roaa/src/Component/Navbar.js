import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default  class Navbar extends Component{
   
render(){
    return(
        <>


<div className="App" style={{fontFamily: 'Amaranth' ,color:'#00b339'}}>
       <div className="header"style={{position:'relative', overflow:"hidden",backgroundColor:" #f1f1f1",color:'green' }} >
       <a href="#default" class="logo"style={{
        fontWeight:"normal",textDecoration:"none", position:'absolute', top:'25%', left:'5%', fontSize:"20px",color:'#00b339'}} >Sport <img style={{maxWidth:'30px', maxHeight:'30px'}} src={require('../Assets/muscle.svg')}></img> health</a>
       <div className="header-right" style={{float:"right"}}>
       <a className="active "style={{float:"left",textAlign: "center",padding: "12px" , fontSize:"20px",textDecoration:"none",color:'#00b339'}} href="#home">Home</a>
       <a href="#contact" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>Food</a>
       <a href="#about" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>controlweight</a>
       <a href="#about" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>deit</a>
       <a href="#about" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>Communcation</a>
       <a href="#about" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>Login</a>
       <a href="#about" style={{float:"left",textAlign: "center",padding: "12px", fontSize:"20px",textDecoration:"none",color:'#00b339'}}>signup</a>

     </div>
      </div>
      </div>
       
  {/* <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="#"> <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">Sport <img style={{maxWidth:'70px', maxHeight:'60px', position:'absolute', top:'12%', left:'5%' }} src={require('../Assets/bicycle.svg')}></img> health</a>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav" >
      <a className="nav-item nav-link active" href="/Homepage">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link text-success" href="#">Food</a>
      <a className="nav-item nav-link text-success" href="#">Food</a>
      <a className="nav-item nav-link text-success" href="#">control weight</a>
      <a className="nav-item nav-link text-success" href="#">deit</a>
      <a className="nav-item nav-link text-success" href="#">Communcation</a>
      <a className="nav-item nav-link text-success" href="/login">Login</a>
      <a className="nav-item nav-link text-success" href="/SignUp">signup</a>
    </div>
  </div>
</nav>
     </a>
      </nav> */}
     
 
        </>
    );
}
}
