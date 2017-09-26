// CreateSport.js
import React, {Component} from 'react';
import {graphql,gql} from 'react-apollo';

class CreateSport extends Component{
	state = {
		name:'',
	}
	render(){
		return(
			<div className='col-md-6'>
				<form onSubmit={(e)=> {
					e.preventDefault();
					this._createSport();
					this.setState({name:''})
				}
				}
				>
					<div className= 'form-group'>
					<input
					value={this.state.name}
					onChange={(e)=>this.setState({name:e.target.value})}
					type='text'
					placeholder='name of the sport to be added'
					className='form-control'
					/>
					</div>
				</form>
			</div>
		)
	}
	_createSport= async() =>{
		const{name}= this.state
		await this.props.createSportMutation({
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
export default graphql(create_sport_mutation,{name:'createSportMutation'})(CreateSport)