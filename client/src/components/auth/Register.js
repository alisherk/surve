import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
  state = {
    username: '',
    password: '',
    message: ''
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password, password2 } = this.state;
    const reg = /(?=.*[\d])(?=.*[A-Z])[A-Za-z\d]{6,}$/;
    if (password !== password2) {
      return this.setState({ message: 'Passwords do not match' });
    }
    if(!reg.test(password)) {
      return this.setState({ message: 'Password to have 6 characters with one digit ' + 
      'one uppercase character'}); 
    }
    axios.post('/api/registerUser', {
      username,
      password
    }).then(res => {
        if(res.data && res.status === 200)
        this.setState({message: res.data});
        if (this.state.message === 'user is created'){
           window.location.href='/';
        } 
    }).catch(err => {
       if (err.response.data) {
          let message = err.response.data;
          this.setState({ message }); 
      } else {
        console.log(err);
      }
    })
  };

  render() {
    return (
      <div className='register-photo'>
        <div className='form-container'>
          <div className='image-holder' />
          <form onSubmit={this.handleSubmit}>
            <h2 className='text-center'>
              <strong>Open</strong> an account.
            </h2>
            <p className='text-center text-danger'> {this.state.message} </p>
            <div className='form-group'>
              <input
                className='form-control'
                id='username'
                type='email'
                name='username'
                placeholder='Email'
                onChange={this.handleChange('username')}
                autoComplete='email'
                required
              />
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                id='password'
                type='password'
                name='password'
                placeholder='Password'
                onChange={this.handleChange('password')}
                autoComplete='new-password'
                required
              />
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                id='password2'
                type='password'
                name='password2'
                placeholder='Repeat password'
                onChange={this.handleChange('password2')}
                autoComplete='new-password'
                required
              />
            </div>

            <div className='form-group'>
              <div className='form-check'>
                <label className='form-check-label'>
                  <input className='form-check-input' type='checkbox' />I agree
                  to the license terms.
                </label>
              </div>
            </div>
            <div className='form-group'>
              <button className='btn btn-primary btn-block' type='submit'>
                Register
              </button>
            </div>
            <p className='text-center'>
              Register already, please <NavLink to='/login'> Login </NavLink>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
