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

class App extends Component {

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
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
            <Route path= '/register' component={Register} />
            <Route path= '/login' component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
null,
{ fetchUser }
)(App);
