// InventoryItems.js
import React,{Component } from 'react'
import{Link } from 'react-router-dom'

class InventoryItems extends Component {
render(){
	console.log(this.props.items.id)
	const id = this.props.items.id
	return(
		
		<div><Link to ='{/Inventory/${id}}'>{this.props.items.itemName} ({this.props.items.itemNumber})</Link></div>
		)
}
}
export default InventoryItems