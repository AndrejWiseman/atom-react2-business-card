import React from 'react';
import mail from '../images/mail.png'



function MainContent() {
    return (

        <div className="main">
            <h1>Andrej Mudri</h1>
            <h3>Frontend Developer</h3>
            <h4>andrejmudri.website</h4>
            <button><img src={ mail } alt="mail"/><h5>Email</h5></button>

            <div className="about">
                <h5>About</h5>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                <h5>Interests</h5>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>

        </div>

    )
}

export default MainContent;