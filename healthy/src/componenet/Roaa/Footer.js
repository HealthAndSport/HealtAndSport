import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default  class Footer extends Component{
   
render(){
    return(
        <>
    
  <div className="card-footer text-muted text-left">
     
  <h5 style={{fontFamily:"Amaranth"}}>join us..</h5> <a href="https://www.facebook.com/"> <img style={{maxWidth:'30px', maxHeight:'30px' }} src={require('../Assets/facebook.svg')}></img></a>
  <a href="https://www.youtube.com/"><img style={{maxWidth:'30px', maxHeight:'30px'}} src={require('../Assets/youtube.svg')}></img></a>
  <a href="https://www.snapchat.com/"><img style={{maxWidth:'30px', maxHeight:'30px' }} src={require('../Assets/snapchat.svg')}></img></a>
</div>
        </>
    );
}
}
