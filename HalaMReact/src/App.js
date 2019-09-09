import React ,{Component}from 'react';
import DietTable from './Comp/DietTable'
import Tips from './Comp/Tips'
const axios = require('axios');

class App extends Component{
  state={ Url:"",tips:"",Name:""}

  category=(e)=>{
    console.log(e.target.value)
    this.setState({Name:e.target.value})
  }

  diet=()=>{
    axios.get(`http://localhost:9000/Momani/diet/${this.state.Name}`)
    .then(res=>{
      console.log(res)
      this.setState({Url:res.data})
      
    })

   
  }

  componentDidMount=()=>{
    axios.get("http://localhost:9000/Momani/tips")
    .then(res=>{
      
      this.setState({tips:res.data})
     
    })
    

   }

  
  render(){
   
  return (
  <>
  

  <div>
    <select defaultValue="" className="btn btn-outline-primary" onClick={this.category.bind(this)} >
    <option value="" disabled  hidden>Diet Categtoy</option>
    <option  value="Gaining Lean Muscle" > Gaining Lean Muscle</option>
    <option  value="Lose Weight"   >Lose Weight</option>
    <option value="Gain Weight">Gain Weight</option>
  </select>
  </div>




<button  onClick={this.diet}  style={{float:"right", marginTop:"-35px", marginRight:"5px"}} className="btn btn-outline-primary">Get Your Diet Schedule </button>

{this.state.Url.length>0 && < DietTable table={this.state.Url} title={this.state.Name}/>}
{this.state.tips.length>0&&this.state.Url.length===0&&<h1>Tips For Stick With Healthy Diet</h1>}
{this.state.tips.length>0&&this.state.Url.length===0 &&this.state.tips.map((elem,i)=> <Tips tip={elem} key={i}/>)}
    </>
  );
}
}
export default App;



  





