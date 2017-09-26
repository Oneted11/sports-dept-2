// IndividualInventory.js
import React,{Component} from 'react'
import {gql,graphql} from 'react-apollo'
import { Link } from 'react-router-dom'

class IndividualInventory extends Component{
	constructor(){
		super();
		async()=>{
			const {id}= this.props.match.params.id
			await this.props.individualQuery({
				variables:{
					id
				}
			})
		}
	}
	render(){

		const inventoryItem = this.props.individualQuery
		return(
			<div>
				<h1>{inventoryItem.itemName}</h1>

			</div>
			)
	}

}
const INDIVIDUAL_INVENTORY_QUERY = gql `
query IndividualInventoryQuery ($id:ID){
  Inventory(id:$id){
    itemName,
    itemNumber,
    users
  }
}
`
export default graphql(INDIVIDUAL_INVENTORY_QUERY, {name:'individualQuery'})(IndividualInventory)