import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment'

class Item extends Component {
  state = { comment: "", i: "", counter: 0, view: false }

  addcomment = (e) => {

    this.setState({ comment: e.target.value })
  }
  mynewcomment = (id) => {

    axios.put(`http://localhost:9000/Momani/newcomment/${this.state.comment}/${id}`)
      .then(res => {
        this.setState({ i: res.data, comment: "" })


      })

  }

  flag = () => {
    let i = this.state.counter + 1

    this.setState({ counter: i, model: !this.state.model })
  }

  view = () => {

    if (this.props.post.comment.length >= 0)
      this.setState({ view: !this.state.view })

  }

  render() {

    return (

      <>
        {this.state.counter < 5 ?
        <div className="container">
          <div className="row">
            <div className="card" style={{ width: '100%' }}>
              <div className="card-body">
                {/* ....................flag.............. */}
     


{/* .........................flag................ */}


                <h5 className="card-title">{this.props.post.post}</h5>

                <button className="btn btn-info" onClick={this.view}>view comment</button>
                <div>
                  {this.state.view && this.props.post.comment.map((elem, i) =>
                    <Comment elem={elem} key={i} />)}

                  {this.props.post.comment.length === 0 && this.state.view && <p>No comment yet</p>}


                  <div class="input-group mb-3">
                    {this.state.view && <input className="form-control" value={this.state.comment} onChange={this.addcomment.bind(this)}></input>}
                    <div class="input-group-append">
                      {this.state.view && <button onClick={this.mynewcomment.bind(this, this.props.post._id)}>add comment</button>
                      }
                    </div>
                  </div>

                </div>
              
              </div>
            </div>
            </div>
          {this.state.i.length > 0 && this.props.updatecomment()}
          </div>
          : ""}


<div className="container">
 {this.state.counter<5&&<button type="button"  onClick={this.flag} className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">flag</button>}
 <div className="modal fade" id="myModal" role="dialog">
   <div className="modal-dialog">
   
     <div className="modal-content">
       <div className="modal-header">
         <button type="button" className="close" data-dismiss="modal">&times;</button>
         <h4 className="modal-title">Reporte Msg</h4>
       </div>
       <div className="modal-body">
         <p>thank you  for your report.</p>
       </div>
       <div className="modal-footer">
         <button onClick={this.model} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
       </div>
     </div>
     
   </div>
 </div>
 
</div>

        {/* {this.state.counter < 5 ?
          <div>
            <div>
              <div>{this.props.post.post}</div>
            </div>
            <button onClick={this.view}>view comment</button>

            <div>
              {this.state.view && this.props.post.comment.map((elem, i) => <Comment elem={elem} key={i} />)}

              {this.props.post.comment.length === 0 && this.state.view && <p>No comment yet</p>}

              {this.state.view && <input value={this.state.comment} onChange={this.addcomment.bind(this)}></input>}

              {this.state.view && <button onClick={this.mynewcomment.bind(this, this.props.post._id)}>add comment</button>}

            </div>
            {this.state.i.length > 0 && this.props.updatecomment()}
          </div>
          : ""} */}





      </>
    );



  }

}
export default Item