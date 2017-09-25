// CreateTeam.js
import React,{Component} from 'react'
import {graphql,gql} from 'react-apollo';
import TeamList from './TeamList';

class CreateTeam extends Component{
	state = {
		name:'',
	}

	render(){
		return(
			<div className='col-md-6'>
			<form onSubmit ={(e)=>{
				e.preventDefault();
				this._createteamName();
			}}
			>
				<div className= 'form-group'>
					<input
					value={this.state.name}
					onChange={(e)=>this.setState({name:e.target.value})}
					type='text'
					placeholder='name of team'
					className='form-control'
					/>
					</div>
			</form>
			<TeamList/>
			</div>
		)
	}
	_createteamName= async ()=>{
		const{name} = this.state
		await this.props.createTeamMutation({
			variables:{
				name
			}
		})
	}

}
const CREATE_TEAM_MUTATION = gql `
mutation CreateTeamMutation($name:String!){
	createTeam(
	name:$name
	){
		id
		name
	}
}
`
export default graphql(CREATE_TEAM_MUTATION,{name:'createTeamMutation'})(CreateTeam)