import React, { Component } from 'react'



export class SearchBar extends Component {
     
    
    state = {
                
        title:"",
              
        videos:""

        }



    onChange = ( e ) => {
        
        this.setState( {

            [ e.target.name ] :  e.target.value
             
        } )
     
                }



    

    
    render() {
        return (

            <div className = "card card-body mb-4 p-4" >
                
                <h3  className = "display-4 text-center" >
                
                <i  className = "fas fa-dumbbell fa-2x" /> Search for a workout
                
                </h3>

                <p> Get more exercise </p>
             
                    <div className="form-group">

                        <input
                        
                        className = "form-control form-control-lg"
                        
                        style = {{ width:"400px" , display:"inline"  }} 
                        
                        type = "text"
                        
                        placeholder = "search.."
                        
                        name = "title"
                        
                        value = { this.state.title }
                        
                        onChange = { this.onChange.bind( this ) }

                        />
                

                    </div>
                    
                    <button 
                    
                    
                    onClick = { this.props.find.bind( this,this.state.title ) }
                    
                    style = {{ width:"200px",marginLeft:"600px" }}
                    
                    className = "btn btn-primary btn-lg btn-block mb-5" 
                    
                    type = "submit" >
                    
                    Search
                    
                    </button> 
                
            </div>
        )
    }
}


export default SearchBar