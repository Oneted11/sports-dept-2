// CreateSport.js
import React, {Component} from 'react';
import {graphql,gql} from 'react-apollo';

class CreateSport extends Component{
	state = {
		name:'',
	}
	render(){
		return(
			<div>
				<form onSubmit={(e)=> {
					e.preventDefault();
					this._createSport();
				}
				}
				>
					<div className= 'form-group'>
					<input
					value={this.state.name}
					onChange={(e)=>this.setState({name:e.target.value})}
					type='text'
					placeholder='The name of the sport you want to add'
					/>
					</div>
				</form>
			</div>
		)
	}
	_createSport= async() =>{
		const{name}= this.state
		await this.props.CreateSportMutation({
			variables:{
				name
			}
		})
	}
}
const create_sport_mutation = gql`
mutation CreateSportMutation($name:String!){
	createSport(
	name:$name
	){
		id
		name
	}
}
`
export default graphql(create_sport_mutation,{name:'CreateSportMutation'})(CreateSport)