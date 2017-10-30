// IndividualInventory.js
import React,{Component} from 'react'
import {gql,graphql} from 'react-apollo'
import { Link } from 'react-router-dom'

const IndividualInventory = props =>{
	console.log("IndividualInventory props",props)
	return(
		<div>
			<h1>The Inventory Id is : {props.match.params.InventoryId}</h1>
		</div>
		)
}
export default IndividualInventory