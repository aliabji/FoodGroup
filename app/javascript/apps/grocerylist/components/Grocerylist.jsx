import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import { Route, BrowserRouter,Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class  Grocerylist extends Component {

	constructor (props) {
			super(props)

			this.state = {
        list: [],
        user: '',
        tempName: '',
        tempDescription: ''
			};
  }

  componentDidMount () {
    axios.get('api/groceries', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    .then((response) => {
      let lists = []
      for (let i = 0; i < response.data.result.length; i++) {
        lists.push({
          id: response.data.result[i].id,
          name: response.data.result[i].name,
          description: response.data.result[i].description
        })
      }
      this.setState({
        list: lists,
        user: response.data.user.id
      })
      console.log(response)
      console.log(this.state)
    })
    .catch(function(error) {
      console.log(error)
    })
  }
  
  onChange = (e) => {

    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state)
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    let newListName = this.state.tempName
    let newDescription = this.state.tempDescription
    let user = this.state.user
    axios.post('api/groceries', {
      user_id: user,
      name: newListName,
      description: newDescription
      }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
      })
    .then((response) => {
      console.log(response)
      let lists = []
      for (let i = 0; i < response.data.result.length; i++) {
        lists.push({
          id: response.data.result[i].id,
          list: response.data.result[i].name,
          description: response.data.result[i].description
        })
      }
      this.setState({
        list: lists
      })
      console.log(this.state)
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  deleteButton = (data) => {
    console.log("deleteButton data", data)

    axios.delete('api/groceries/' + data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then((response) => {
      console.log(response)
      let lists = []
      for (let i = 0; i < response.data.result.length; i++) {
        lists.push({
          id: response.data.result[i].id,
          name: response.data.result[i].name,
          description: response.data.result[i].description
        })
      }
      this.setState({
        list: lists
      })
      console.log(response)
      console.log(this.state)
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  renderLists () {
    console.log("here")

    return <div>{this.state.list.map((names, index)=> <div key={names.id} onClick={this.deleteButton.bind(this, names.id)}>{names.name}</div>)}</div>
    console.log(names)
    console.log(index)
  }

	render() {
	  return (
		  <div className="scaleBG">
			  <Navbar />
        <div className="jumbotron listed7">
		    <div className="bootform2" >
		      <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">List Name</label>
              <input  className="form-control" name="tempName" placeholder="Add List Name" onChange={this.onChange}/>
    
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input  className="form-control" name="tempDescription" placeholder="Add Description" onChange={this.onChange}/>
            </div>
           
            <button  className="btn btn-primary">Submit</button>
          </form>
          </div>
          <div>
            {this.renderLists(this.state.list)}
          </div>
         </div>
         <Link to="/GrocerylistCreated"  className="book2" >grocerylist created</Link> 
			</div>
		)
	} 
}


export default Grocerylist