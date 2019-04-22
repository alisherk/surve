import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './store/actions/index';

//components 
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Dashboard from './components/layout/Dashboard'; 
import Register from './components/auth/Register';
import Login from './components/auth/Login'; 
import SurveyNew from './components/layout/SurveyNew';
import NotFound from './components/layout/NotFound';


class App extends Component {

 state = {
   isAuthenticated: false
 }
 
 componentDidMount() {
    this.props.fetchUser();  
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' render={() => <Dashboard isAuthenticated={this.props.auth} />} />
            <Route path='/surveys/new' render={() => < SurveyNew isAuthenticated={this.props.auth} />}/>
            <Route path= '/register' component={Register} />
            <Route path= '/login' component={Login} />
            <Route path='*' component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToprops = ({ auth }) => {
    return { auth }
}


export default connect(
mapStateToprops,
{ fetchUser }
)(App);
