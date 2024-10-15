import React, { Component } from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';


export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    axios.post('http://localhost/php-backend/register.php', { email, name, password })
      .then(response => {
        console.log(response.data);
        // Redirect or show success message
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  render() {
    const { email, name, password, confirmPassword } = this.state;
    return (
      <div className='registration-container'>
        <div className="card no-bg">
          <h1>Sign-Up</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="input-list ">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' value={email} onChange={this.handleInputChange} />
            </div>
            <div className="input-list">
              <label htmlFor="name">Name</label>
              <input type="text" name='name' value={name} onChange={this.handleInputChange} />
            </div>
            <div className="input-list">
              <label htmlFor="password">Password</label>
              <input type="password" name='password' value={password} onChange={this.handleInputChange} />
            </div>
            <div className="input-list">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" name='confirmPassword' value={confirmPassword} onChange={this.handleInputChange} />
            </div>
            <br />
            <div className="registration-btn">
              <button type='submit'>Register</button>
            </div>
            <br />
            <p className='already'>Already have an account? <Link to="/login">Login</Link></p>
            <br />
            <p className='or'>Or</p>
            <div className="social-link">
              <FontAwesomeIcon icon={faFacebook} className='fb-icon' />
              <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Registration;
