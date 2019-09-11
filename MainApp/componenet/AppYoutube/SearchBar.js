import React, { Component } from 'react'
// import axios from 'axios';

export class SearchBar extends Component {
  state = {
                title:"",
                videos:""

    }
    onChange(e){
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    // find=(e)=>{
    //     e.preventDefault();
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${this.state.title}
    //     &type=video&key=AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s
    // `)
    //         .then(res => {
    //             console.log(res.data.items);
    //             this.setState({
    //               videos: res.data.items

    //             }
    //             )

    // }

    //         )}

    // componentDidMount(){
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=
    //     ${this.state.title}
    //     &type=video&key=AIzaSyDJfV4Io9lIg28IVDUllIywSI1_v6qWwSk`)
    //         .then(res => {
    //             console.log(res.data.items);
    //             this.setState({
    //                 videos: res.data.items

    //             }
    //             )
    //             // console.log(this.state.videos[0].id.kind)
    //         })
    //         .catch(err => console.log(err))
    //     // x = 1;

    // }
    // componentDidMount() {
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=
    //    ${this.state.title}
    //     &type=video&key=AIzaSyDJfV4Io9lIg28IVDUllIywSI1_v6qWwSk`)
    //         .then(res => {
    //             console.log(res.data);
                
               
    //         })
    //         .catch(err => console.log(err))
    //     // x = 1;

    // }

    
    render() {
        return (
            <div className="card card-body mb-4 p-4">
                <h3 className="display-4 text-center">
                <i className="fas fa-dumbbell fa-2x"/> Search for a workout
                </h3>
                <p>Get more exercise</p>
             
                    <div className="form-group">
                        <input
                        className="form-control form-control-lg"
                       style={{width:"400px",display:"inline" }} 
                        type="text"
                        placeholder="search.."
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange.bind(this)}

                        />
                
                    </div>
                    
                    <button onClick={this.props.find.bind(this,this.state.title)}
                    style={{width:"200px",marginLeft:"600px"}}
                    className="btn btn-primary btn-lg btn-block mb-5" type="submit" >Search</button>
            
                
                {/* { 

              
                
                
                    this.state.videos.length>0 &&
                    <iframe  src= {`//www.youtube.com/embed/${this.state.videos[0].id.videoId}`} frameborder="0" allowfullscreen ></iframe>
                    

                
                } */}

                         
               
                
            </div>
        )
    }
}

export default SearchBar