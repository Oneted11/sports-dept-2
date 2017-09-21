import React, { Component } from 'react';
import Create from './Create';
import CreateSport from './CreateSport';
import Header from './Header';
// import '../styles/App.css';
// import '../styles/Bootstrap.min.css';
import {Switch,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="Container-fluid">
      <Header/>
      <div>
        <Switch>
          <Route exact path='/create' component={CreateSport}/> 
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
