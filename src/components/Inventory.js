// Inventory.js
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {
	graphql,
	gql
} from 'react-apollo' 

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ inventory,match }) => {console.log("Topics",inventory)
	return(
  <div>
  {inventory.allInventories.map((item,index)=>
				<div key={item.id} >
				<Link to = {`${match.url}/${item.id}`}>
					{index+1}.{item.itemName}({item.itemNumber})
					</Link>
				</div>)}

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)}

const Inventory = ({allInventory,match}) =>{ 
	console.log("inventory",allInventory)
	if (allInventory && allInventory.loading) return(<div>Loading...</div>)
		if (allInventory && allInventory.error) return(<div>connection error</div>)
return(
  <Router>
    <div>
      <ul>
        <li><Link to={`${match.url}`}>Home</Link></li>
        <li><Link to={`${match.url}/about`}>About</Link></li>
        <li><Link to={`${match.url}/topics`}>Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path={`${match.url}`} component={Home}/>
      <Route path={`${match.url}/about`} component={About}/>
      <Route path={`${match.url}/topics`} render={routeProps=><Topics{...routeProps} inventory={allInventory}/>}/>
    </div>
  </Router>
)}
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
export default graphql (InventoryQuery,{name:'allInventory'})(Inventory)