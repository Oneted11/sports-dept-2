// Create.js
import React, {Component} from 'react';
import CreateSport from './CreateSport';
import SportsList from './SportsList';

class Create extends Component {
	render() {
		return(
			<div className ='col'>
			
			<CreateSport/>
			<div>
				<SportsList/>
			</div>
			</div>
			)
	}
}
export default Create; 