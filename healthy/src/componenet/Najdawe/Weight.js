import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Weight extends Component {
  state = {
    result: "",
    hieght: '',
    weight: '',
   

  }
  changeValue = (e) => {
    
    this.setState({ [e.target.name]: e.target.value })

  }
  check = async() => {
  await this.setState({
      result:
        parseInt((this.state.weight / ((this.state.hieght) * (this.state.hieght)) * 100) * 100)
    })
   

    if (this.state.result <= 18 && this.state.result > 0) {

      window.location = "tips";
    }
    if (this.state.result > 18 && this.state.result <= 24) {
     
      window.location = "normal";

    }
    if (this.state.result > 24 && this.state.result <= 29) {
      
      window.location = "overweight";
    }
    if (this.state.result > 29) {
      
      window.location = "obese"
        
          
    }


  }

  render() {
   

    return (
      <div className="App" style={{fontFamily: 'Amaranth' ,color:'green'}}>
        
        <div className="imgcontainer" style={{ marginLeft: "400px" }}>
          <img src="https://epsi.eu/wp-content/uploads/2019/04/euhealth.png" />
        </div>
        <div className="d-flex flex-column align-items-center" style={{ marginTop: '12px' }} >
          <h3>How Ideal Weight Is Calculated</h3>
       
          <div className="form-group w-10">


              <img src={require('../Assests/tape-measure.svg')} style={{width:"50px"}}></img>   
           <input type="text" name="hieght" style={{border: "1px solid", borderRadius:"8px",fontFamily: 'Amaranth', width:"200px",height:"40px"}}
              value={this.state.hieght} className="form-control" className="fas fa-prescription-bottle"
              onChange={this.changeValue} placeholder=" Enter your Hieght ..." required />
            
          </div>
         

          <div className="form-group w-10">
           
            <img src={require('../Assests/scale.svg')} style={{width:"50px"}}></img> 
               <input type="text" name="weight" style={{border: "1px solid", borderRadius:"8px",fontFamily: 'Amaranth', width:"200px",height:"40px"}}
              value={this.state.weight} className="form-control" className="fas fa-weight "
              onChange={this.changeValue} placeholder=" Enter your Weight ..." required />
           


          </div>
          <button style={{ marginBottom: "6px", width:"20%", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)", backgroundColor:"green",border:"green" }} type="submit" name="result"
            className="btn btn-primary" onClick={this.check}>
            Calculate</button>

        </div>
      </div>
    );
  }
}
export default Weight;

 Weight.propTypes = {
  hieght: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};
