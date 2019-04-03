import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const output = this.props.auth ? (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <NavLink to='/account' className='nav-link text-white'>
           My account
          </NavLink>
        </li>
        <li className='nav-item'>
          <a href='/api/logout' className='nav-link text-white'>
            Logout
          </a>
        </li>
      </ul>
    ) : (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <a href='/auth/google' className='nav-link text-white'>
            Google  
          </a>
        </li> 
        <li className='nav-item'>
          <NavLink to='/register' className='nav-link text-white'>
           Register 
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/login' className='nav-link text-white'>
           Login
          </NavLink>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className='navbar navbar-dark navbar-expand-lg navbar-light bg-dark'>
          <NavLink to='/' className='navbar-brand text-white'> Surve Inc</NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon navbar-light' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'> 
            {output}        
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
