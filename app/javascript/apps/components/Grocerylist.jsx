import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'
import { Route, BrowserRouter,Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class  Grocerylist extends Component {

	constructor (props) {
			super(props)
			
			this.state = {
				
			};

		 
	}

	render() {
	
		return (
			<div className="cutbackground">
				<Navbar />
				
				  <form>
				    <input type="text" className="formed" name="list name" />
				    <input type="submit" value="Submit" />

				    <input type="text" className="formed" name="Description" />
				    <input type="submit" value="Submit" />

				    <input type="text" className="formed" name="add item" />
				    <input type="submit" value="Submit" />




			
		     </form>     
			</div>
		)
	} 
}









export default Grocerylist