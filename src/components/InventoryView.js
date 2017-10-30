// Inventoryview.js
import React, { Component } from 'react'
import {Switch,Route } from 'react-router-dom'
// import IndividualInventory from './IndividualInventory'
import InventoryList from './InventoryList'


const InventoryView = props =>{
	console.log("props for InventoryView",props)
	const {match} =props
	return(
		<Switch>
			<Route exact path ='/Inventory' render={routeProps=><InventoryList {...routeProps} AllInventory={props.AllInventory}/>}/>
			<Route path={`${props.match.url}/:InventoryId`} component ={IndividualInventory}/>
		</Switch>
	)
}
const IndividualInventory = props =>{
	console.log("IndividualInventory props",props)
	return(
		<div>
			<h1>The Inventory Id is :</h1>
		</div>
		)
}
export default InventoryView	
// render= {routeProps=><IndividualInventory {...routeProps} AllInventory={props.AllInventory} />}																																																																																																																								