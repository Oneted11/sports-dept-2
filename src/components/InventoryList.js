// InventoryList.js
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import IndividualInventory from './IndividualInventory'
import{Link,Route } from 'react-router-dom'

const InventoryList = ({AllInventory,match})=>{
	console.log("the props for InventoryList",AllInventory)
	if (AllInventory && AllInventory.loading) return(<div>Loading...</div>)
		if (AllInventory && AllInventory.error) return(<div>connection error</div>)
			const InventoriestoDisplay = AllInventory.allInventories
			return (
			<div>
			<div className='col'>
			{
				InventoriestoDisplay.map((item,index)=>
				<div key={item.id} >
				<Link to = {`${match.url}/${item.id}`}>
					{index+1}.{item.itemName}({item.itemNumber})
					</Link>
				</div>)
			}
			</div>
			<div className='col'>
			</div>
			</div>
		)
	}
export default InventoryList;