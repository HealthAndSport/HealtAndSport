import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './NavBar';
import Card from './Card'
import SearchBar from './SearchBar';
import Video from './Video';

export class AppTamimi extends Component {
    state = {
        videos:""
    }

    find=(title)=>{
        // console.log(title)
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${title}
        &type=video&key=AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s
    `)
            .then(res => {
                // console.log(res.data.items);
                this.setState({
                  videos: res.data.items

                }
                )

    }

            )}

    // componentDidMount() {
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=healthy sports&type=video&key=AIzaSyDJfV4Io9lIg28IVDUllIywSI1_v6qWwSk`)
    //         .then(res => {
    //             console.log(res.data.items);
    //             this.setState({
    //                 videos: res.data.items

    //             }
    //             )
    //             console.log(this.state.videos[0].id.kind)
    //         })
    //         .catch(err => console.log(err))

    // }
  

    render() {
        // console.log(this.state.test[0].name)
        return (
            <>
                <NavBar/>
                <SearchBar find={this.find}/>
               {this.state.videos.length===0 &&<Card/>}
              
             
               {this.state.videos.length>0 && this.state.videos.map((elem,index) =><Video vid={elem} key={index}/>)} 
                

              
                
    
            </>
        )
    }
}

export default AppTamimi