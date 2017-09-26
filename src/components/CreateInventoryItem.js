// CreateInventoryItem.js
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import InventoryList from './InventoryList'

class CreateInventoryItem extends Component{
	constructor(props){
		super(props);
	}
	state = {
		name:'',
		// number:
	}

	render(){
		return(
			<div className='col-md-8'>
				<form onSubmit={(e)=> {
					e.preventDefault();
					this._createInventoryItem();
					this.setState({name:''});
				}
				}
				className='form-inline'
				>
					<div className= 'form-group'>
					<input
					value={this.state.name}
					onChange={(e)=>this.setState({name:e.target.value})}
					type='text'
					placeholder='name of Inventory Item'
					className='form-control mb-2 mr-sm-2 mb-sm-0'
					/>
					<input
					value={this.state.number}
					onChange ={(e)=>this.setState({number:e.target.value})}
					type = 'number'
					placeholder = 'number in stock'
					className='form-control mb-2 mr-sm-2 mb-sm-0'
					/>
					</div>
				</form>
				<InventoryList/>
			</div>
			)
	}
	_createInventoryItem=async()=>{
		const{name,number}=this.state
		await this.props.createInventoryItemMutation({
			variables:{
				name,
				number
			}
		})
	}
}
const CREATE_INVENTORY_ITEM = gql `
mutation CreateInventoryItemMutation($name:String,$number:Int!) {
	createInventory(
	itemName:$name,
	itemNumber:$number
	) {
		itemName
		itemNumber
	}
}
`
export default graphql(CREATE_INVENTORY_ITEM,{name:'createInventoryItemMutation'})(CreateInventoryItem)