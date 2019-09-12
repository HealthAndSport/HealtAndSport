import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Navbar from './Navbar';

export default  class Homepage extends Component{
   
render(){
    return(
        <>
       <Navbar/>
      <div className="card-body">
      <video autoPlay style={{maxWidth:'100%'}} >
        <source src="https://cdn2.hubspot.net/hubfs/630004/SH_MAIN_1080.mp4" type="video/mp4"/>
      </video> 
     </div>  
<Footer/>
        </>

    );
}
}