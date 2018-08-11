import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserLogin from './components/UserLogin.jsx'
import UserPage from './components/UserPage.jsx'
import NotFound from './components/NotFound.jsx'


export default class App extends Component {
   render() {
      return (

         <Router>
            <Switch>
               <Route exact path='/' component={UserLogin}/>
               <Route path='/users/:username' component={UserPage}/>
               <Route component={NotFound}/>
            </Switch>
         </Router>
         
      );
   }
}
