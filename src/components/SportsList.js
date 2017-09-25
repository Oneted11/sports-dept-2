// SportsList.js
import React, { Component } from 'react'
import SportListItem from './SportListItem'
import { graphql, gql } from 'react-apollo'

class SportsList extends Component{
	render() {
		console.log(this.props.allSportsQuery)
		if(this.props.allSportsQuery.loading){
			return(<div>Loading...</div>)
		}
		if(this.props.allSportsQuery.error){
			return(<div>Error</div>)
		}
		const SportsToRender = this.props.allSportsQuery.allSports
		return(
			<div>
			<ol>
			{SportsToRender.map(Sports => <SportListItem key={Sports.id} Sport={Sports}/>)}	
			</ol>
			</div>
			)
	}
}	

const ALL_SPORTS_QUERY = gql `
query AllSportsQuery{
  allSports{
    id
    name
  }
}
`
export default graphql(ALL_SPORTS_QUERY, {name:'allSportsQuery'}) (SportsList)