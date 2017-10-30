// InventoryItems.js
import React,{Component } from 'react'
import{Link } from 'react-router-dom'

class InventoryItems extends Component {
render(){
	console.log(this.props.items.id,this.props.items.itemName,this.props)
	const itemName = this.props.items.itemName
	const id = this.props.items.id
	const {match} = this.props
	return(
		
		<div>
		<Link to ={`Inventory/${id}`} >{this.props.items.itemName} ({this.props.items.itemNumber})</Link>
		</div>
		// <div>{this.props.items.itemName} ({this.props.items.itemNumber})</div>
		)
}
}
export default InventoryItems