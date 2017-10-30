// InventoryDash.js
import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
// import {PropsRoute} from '../utils'
// import Header from './Header'
import {Switch,Route } from 'react-router-dom'
// import IndividualInventory from './IndividualInventory'
import InventoryView from './InventoryView'

class InventoryDash extends Component{
	constructor(props){
		super(props);
		this.state={
			currentInventoryId : 0
		}
	}
render(){
	// const inventory = this.props.AllInventory
	console.log("the props for InventoryDash",this.props)
	const {match} = this.props
			// <PropsRoute path='/Inventory' exact component= {InventoryList} AllInventory={this.props.AllInventory}/> 
	return(
		<div>
		<Switch>
		<Route path ='/Inventory' render={routeProps=><InventoryView {...routeProps} AllInventory={this.props.AllInventory}/>}/>
		</Switch>
		</div>
		)
	}
}
const  PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const test =(name) =>(
	<h1>Testing 123,${name}</h1>
	)

// const InventoryList = ({AllInventory})=>{
// 	console.log("the props for InventoryList",AllInventory)
// 	if (AllInventory && AllInventory.loading) return(<div>Loading...</div>)
// 		if (AllInventory && AllInventory.error) return(<div>connection error</div>)
// 			const InventoriestoDisplay = AllInventory
// 			return (
// 			<div>
// 			{
// 				InventoriestoDisplay.map((item,index)=>
// 				<li key={item.id} >
// 					{index+1}.{item.itemName}({item.itemNumber})
// 				</li>)
// 			}
// 			</div>
// 		)
// }
const InventoryQuery = gql`
query {
	allInventories{
		id
		itemName
		itemNumber
		users{id,regno}
	}
}
`
export default graphql(InventoryQuery,{name:'AllInventory'})(InventoryDash)