import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'

class  GrocerylistCreated extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };
	   
	}

		render() {
		return (
			<div className="scaleBG">
		    <Navbar />
		    <div className=" jumbotron headed">
		    </div>
		    <div className="jumbotron listed2">
		    </div>
		    <div className="bootform">
		    <div class="input-group" >
             <span class="input-group-btn">
               <button class="btn btn-secondary" type="button">submit</button>
            </span>
              <input type="text" class="form-control" placeholder="Add item"/>
            </div>
            </div>
			
			  
		    </div>
		    
		)
	} 
}









export default GrocerylistCreated