import React, { Component } from 'react';
import DietTable from './DietTable'
import Tips from './Tips'
import '../../App.css'
import { posix } from 'path';

const axios = require('axios');

class AppMomani extends Component {
  state = { Url: "", tips: "", Name: "" }

  category = (e) => {
    console.log(e.target.value)
    this.setState({ Name: e.target.value })
  }

  diet = () => {
    axios.get(`http://localhost:9000/Momani/diet/${this.state.Name}`)
      .then(res => {
        console.log(res)
        this.setState({ Url: res.data })

      })


  }

  componentDidMount = () => {
    axios.get("http://localhost:9000/Momani/tips")
      .then(res => {

        this.setState({ tips: res.data })

      })


  }


  render() {

    return (
      <>

        <div style={{ paddingTop: "104px" }}>
          <div style={{ margin: "-80" }}>
            <select id="Hala" style={{ float: "left", height: "38px", paddingLeft: "50px" }} defaultValue="" className="  btn btn-outline-success" onClick={this.category.bind(this)} >
              <option value="" disabled hidden>Diet Categtoy</option>
              <option value="Gaining Lean Muscle" > Gaining Lean Muscle</option>
              <option value="Lose Weight"   >Lose Weight</option>
              <option value="Gain Weight">Gain Weight</option>
            </select>
          </div>
          <button className="btn btn-outline-success " onClick={this.diet} style={{ float: "left" }}>Get Your Diet Schedule </button>
         
          <div  style={{ margin: "60px",backgroundColor:"#F8F8F8",height:"499px" }}>
            {this.state.tips.length > 0 && this.state.Url.length === 0 && <img style={{ width: "50px", height: "50px", position: "relative", left: "-320px", bottom: "-50px" }} src={require('../../Assets/lunch-box.svg')}></img>}
            {this.state.tips.length > 0 && this.state.Url.length === 0 && <h1 style={{ paddingTop: "-10px", color: "green" }} >Tips For Stick With Healthy Diet</h1>}
            {this.state.tips.length > 0 && this.state.Url.length === 0 && this.state.tips.map((elem, i) => <Tips tip={elem} key={i} />)}
            {this.state.Url.length > 0 && < DietTable table={this.state.Url} title={this.state.Name} />}
          </div>

        </div>








      </>
    );
  }
}
export default AppMomani;




