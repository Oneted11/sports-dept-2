// header.js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
	render (){
		return(
			<nav className ="navbar navbar-toggleable-md navbar-light bg-faded" >
			<Link to = '/' className='navbar-brand'>Home</Link>
			<div className="collapse navbar-collapse">
			<ul className='nav-bar nav mr-auto'>
			<li className ='nav-item active'>
			<Link to = '/create'>New</Link>
			</li>
			</ul>
			</div>
			</nav>
			)
	}
}
export default withRouter(Header)