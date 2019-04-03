import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  
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
    const { username, password } = this.state;
    axios.post('/api/loginUser', {
      username,
      password
    }).then(res => {
        console.log(res); 
        if(res.data && res.status === 200)
        this.setState({message: res.data});
        if (this.state.message === 'authenticated'){
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
      <div className='login-photo'>
        <div className='form-container'>
          <div className='image-holder' />
          <form onSubmit={this.handleSubmit}>
            <h2 className='text-center'>
              <strong>Login</strong> to your account.
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
              <button className='btn btn-primary btn-block' type='submit'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
