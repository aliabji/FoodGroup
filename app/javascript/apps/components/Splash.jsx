import React, { Component } from 'react'
import myImage from '../../images/foodgroup.png';
import Backgroundimage from '../../images/shrimp.gif';

class  Splash extends Component {

	constructor (props) {
	    super(props)
	    
	    this.state = {
	    	
	    };
	   
	}


render() {
		return (
			<div className= "splashbackground">
			<a href="/auth/google_oauth2">Sign in with Google</a>
			<a href="/auth/facebook">Sign in with Facebook</a>
			<a href="/api_test">Search</a>
			  <img className="logo" src={myImage} />
			   <button type="button" className="btn btn-default frank"> What's for dinner?</button>
		    </div>
		)
	} 
}




	export default Splash