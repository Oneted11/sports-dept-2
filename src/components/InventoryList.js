// InventoryList.js
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import InventoryItems from './InventoryItems'
import{Link } from 'react-router-dom'

class InventoryList extends Component {
	render(){
		if (this.props.allInventoriesQuery && this.props.allInventoriesQuery.loading) {
			return <div> loading...</div>
		}
		if (this.props.allInventoriesQuery && this.props.allInventoriesQuery.error) {
			return <div> Error</div>
		}
		const InventoriesToDisplay = this.props.allInventoriesQuery.allInventories
		return(
			<div>
				{InventoriesToDisplay.map(items=><InventoryItems key= {items.id} items={items}></InventoryItems>)}
			</div>
			)
	}
}
const ALL_INVENTORY_QUERY = gql `
query AllInventoriesQuery{
	allInventories{
		id
		itemName
		itemNumber
	}
}
`
export default graphql(ALL_INVENTORY_QUERY,{name:'allInventoriesQuery'})(InventoryList)