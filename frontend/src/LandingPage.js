import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import your CSS (Make sure the path is correct)
import BackgroundImage from './images/bg.jpg'; // Import the background image
import LogoImage from './images/cognizant.png'; // Import the logo image

export default function LandingPage() {
    return (
        <header style={HeaderStyle}>
            <div className="logo-container">
                <img src={LogoImage} alt="Your Logo" className="logo" />
            </div>
            <h1 className="main-titles text-center">Unlock a World of Opportunities and Connect with Us Today!</h1>
            <p className="main-para text-center"></p> {/* Add content to your paragraph */}
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" id="reg_btn">
                        <span>LOGIN </span>
                    </button>
                </Link>
                <Link to="/Signup">
                    <button className="primary-button" id="reg_btn">
                        <span>REGISTER </span>
                    </button>
                </Link>
            </div>
        </header>
    );
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`, // Set the background image
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};
