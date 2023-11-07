import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation'; // Import the validation function
import axios from 'axios';
import BackgroundImage from '../src/images/bg2.jpg';

function Signup() {
  // Initialize the navigate function from react-router
  const navigate = useNavigate();

  // Initialize state for form values and errors
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '' // Fix the typo in password field name
  })

  const [errors, setErrors] = useState({});

  // Handle input changes and update the state
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value]}))
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data and set errors
    setErrors(Validation(values));

    if (errors.name === "" && errors.email === "" && errors.password === "") {
      // If there are no validation errors, make a POST request
      axios.post('http://localhost:8081/Signup', values)
        .then(() => {
          // Successfully signed up, now navigate to the Home page
          navigate('/Home'); // Use the navigate function to redirect
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={Bgstyle}>
      <div id="reg-form">
        <form action="" onChange={handleSubmit} id="reg-form-1">
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input
              type='text'
              placeholder='Enter your name'
              name='name'
              onChange={handleInput}
              id="name"
            />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={handleInput}
              id="email"
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              placeholder='Enter password'
              name='password'
              onChange={handleInput}
              id="password"
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100' id="login-btn"><strong>Sign Up</strong></button>
          <p/>
          <p id="p"><input type='checkbox' required id='checkbox'/>Agree to all Terms and Policies</p>
          <p id="p">Already have an account? <Link to='/Login'>login</Link></p>
        </form>
      </div>
    </div>
  );
}
//Define the styles for the background
const Bgstyle = {
  background: `url(${BackgroundImage})`, //Set the background image
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export default Signup;