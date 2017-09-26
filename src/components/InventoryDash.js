// InventoryDash.js
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import InventoryList from './InventoryList'
import Header from './Header'
import {Switch,Route } from 'react-router-dom'
import IndividualInventory from './IndividualInventory'

class InventoryDash extends Component{
render(){
	return(
		<div>
		<Switch>
		<Route exact path='/Inventory' component = {InventoryList}/>
		<Route path ='/Inventory/id' component = {IndividualInventory}/>	
		</Switch>
		</div>

		)
}
}

export default InventoryDash