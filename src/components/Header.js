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
			<li className ='nav-item'>
			<Link to = '/create' className='nav-link'>New Sport</Link>
			</li>
			<li className ='nav-item'>
			<Link to = '/AddTeam' className='nav-link'>New Team</Link>
			</li>
			<li className ='nav-item'>
			<Link to = '/Inventory' className='nav-link'>Inventory</Link>
			</li>
			</ul>
			</div>
			</nav>
			)
	}
}
export default withRouter(Header)