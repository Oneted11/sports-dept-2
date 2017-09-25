// CreateUser.js
import React, {Component} from 'react';
import {graphql,gql} from 'react-apollo';

class CreateUser extends Component{
	state = {
		fullName:'',
		regNo:''
	}
	render(){
		return(
			<div className='col'>
				<form onSubmit={(e)=> {
					e.preventDefault();
					this._createSport();
				}
				}
				>
					<div className= 'form-group'>
					<input
					value={this.state.fullName}
					onChange={(e)=>this.setState({fullName:e.target.value})}
					type='text'
					placeholder='Name of the user to be added'
					className ='form-control'
					/>
					</div>
					<div className= 'form-group'>
					<input
					value={this.state.regNo}
					onChange={(e)=>this.setState({regNo:e.target.value})}
					type='text'
					placeholder='The registration number of the user'
					className ='form-control'
					/>
					</div>
					<input type='Submit'>Submit</input>
				</form>
			</div>
		)
	}
	_createSport= async() =>{
		const.fullName}= this.state
		await this.props.CreateUserMutation({
			variables:{
			fullName,
			regNo
			}
		})
	}
}
const create_user_mutation = gql`
mutation CreateUserMutation($fullName:String!,$regNo:String!){
	createUser(
	fullName:$fullName,
	regno:$regNo
	){
		id,
		fullName,
		regno
	}
}
`
export default graphql(create_user_mutation,name:'CreateUserMutation'})(CreateUser)