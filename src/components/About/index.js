import React from "react";
import './style.scss'
const About = props => {
    return (
    <div className="about-section">
        <div className="inner-container">
            <h1>About Us</h1>
            <p className="text">
            QUENCHX is a one-stop destination for all your beverage requirements, offering a wide range of hot speciality and cold speciality drinks. 
            Whether you're looking for a hot cappuccino or your favourite mocktail served over ice we've got you covered. Just a few clicks and the 
            beverage will be delivered at your doorstep. Our main goal is to meet every customers need along with having minimum environmental impact.
            </p>
            <div className="skills">
                <span>Insta</span>
                <span>Facebook</span>
                <span>Twitter</span>
            </div>
            
        </div>
    </div>
    );
};
export default About