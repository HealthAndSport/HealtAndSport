import React, { Component } from 'react'



export class VideoShow extends Component {
    state = {
        

    };

    render() {
        // console.log(this.props.video)
        return (
            <>
            


              {this.props.video.map((item,index)=>{
                return (
                    <div key={index} className="row ">
                        <div className="card mb-4 shadow-lg col-md-6">
                            <div className="card-body">
                            <h4 className="text-center mb-4">{item.snippet.title}</h4>
                            <iframe width="560"
                            title="shown"
                            height="315" src= {`//www.youtube.com/embed/${item.id.videoId}`} allowFullScreen key={index}></iframe>
                            <h6 className="text-center mb-4">{item.snippet.description}</h6>

                            </div>
                        
                        </div>
                    

                        </div> )
              })}
            </>
        )
    }
}

export default VideoShow