// SportListItem.js
import React, { Component } from 'react'
import TeamList from './TeamList';

class SportListItem extends Component {

  render() {
  	console.log(this.props.Sport)
    return (
      <div>
       <li 
       >
			{this.props.Sport.name}
		</li>
      </div>
    )
  }
  // handleClick =(props) =>(<TeamList Sport={this.props.Sport}/>)
}
export default SportListItem
