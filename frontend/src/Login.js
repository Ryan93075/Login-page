import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import BackgroundImage from '../src/images/bg1.jpg';
import userImage from '../src/images/user.png';

function Login() {
    // Initialize the state for form values and errors
    const [values, setValues] = useState({
        email: '',
        password: '' // Fix the typo in the password field name
    })

    // Initialize the navigate function from react-router
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        // Update the state when input fields change
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values)); // Validate the form data

        if (errors.email === "" && errors.password === "") {
            // If there are no validation errors, make a POST request
            axios.post('http://localhost:8081/Login', values)
                .then(res => {
                    if (res.data === "Success") {
                        navigate('/Home'); // Navigate to the Home page on success
                    } else {
                        alert("No record existed"); // Show an alert if login fails
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={Bgstyle}>
            <div id="form">
                <img src={userImage} alt="User" className="user-image" />
                <form action="" onSubmit={handleSubmit} id="form1">
                    <h2 className="text-center" id="h2text">LOGIN</h2>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <div className="input-container">
                        <input type='email' placeholder='Enter email' name='email' onChange={handleInput} id="email" />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                </div>

                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <div className="input-container">
                        <input type='password' placeholder='Enter password' name='password' onChange={handleInput} id="password" />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                </div>
                    <button type='submit' className='btn btn-success w-100' id="login-btn"><strong>Login</strong></button>
                    <p></p>
                    <p id='p'>New to Cognizant? <Link to="/Signup">Create</Link> an account</p>
                </form>
            </div>
        </div>
    )
}

const Bgstyle = {
    background: `url(${BackgroundImage})`, // Set the background image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}

export default Login;
