import React, { Component } from 'react';
import Create from './Create';
import CreateSport from './CreateSport';
import Header from './Header';
import CreateTeam from './CreateTeam'
import CreateInventoryItem from './CreateInventoryItem'
import InventoryDash from './InventoryDash'
import {Switch,Route } from 'react-router-dom'
import Inventory from './Inventory'

class App extends Component {
  render() {
    return (
      <div className="Container">
      <Header/>
      <br/>
      <div>
        <Switch>
          <Route exact path='/create' component={Create}/> 
           <Route exact path='/AddTeam' component={CreateTeam}/> 
           <Route exact path='/Inventory' component={InventoryDash}/>
           <Route exact path ='/InventoryNew' component={Inventory}/>
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
