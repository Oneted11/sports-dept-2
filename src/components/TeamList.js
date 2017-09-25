// TeamList.js
import React, {Component} from 'react';
import {graphql, gql} from 'react-apollo';

class TeamList extends Component {
	render(){
		console.log(this.props.teamsQuery)
		// const teams = this.props.teamsQuery.allTeams
		// const teamsList = teams.map((teams)=>
		// 	<li key={teams.id}>{teams.name}</li>
		// 	)
		if(this.props.teamsQuery.loading){
			return(<div>loading...</div>)
		}
		if(this.props.teamsQuery.error){
			return(<div>error...</div>)
		}
		const teams = this.props.teamsQuery.allTeams
		return(
			<div>
				{teams.map(teams=><li key = {teams.id}>{teams.name}</li> )}
			</div>
			// <ul>{teams.map(teams=><li key={teams.id}>{teams.name}</li>)}</ul>
		)
	}
}

// const SPORTS_TEAM_QUERY= gql `
// query sportsTeamQuery($filter:TeamFilter){
//   allTeams(filter:$filter){
//    id,name 
//   }
// }
// `
const SPORTS_TEAM_QUERY = gql `
query AllTeamsQuery{
	allTeams{
		id
		name
	}
}`
export default graphql(SPORTS_TEAM_QUERY,{name:'teamsQuery',
	// options: (props) => ({
 //    variables: {
 //    	filter:{sport:{id:this.props.sportId}}
  //   },
  // }),
})(TeamList)