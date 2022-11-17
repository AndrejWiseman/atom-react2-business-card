import React from 'react';
import mail from '../images/mail.png'



function MainContent() {
    return (

        <div className="main">
            <h1>Andrej Mudri</h1>
            <h3>Frontend Developer (In trying)</h3>
            <h4>andrejmudri.websiteInFuture</h4>
            <button><img src={ mail } alt="mail"/><h5>Email</h5></button>

            <div className="about">
                <h5>About</h5>
                <p>Mid 30's Iurist who's trying to be a Frontend developer. I am always rady for new things to learn and meet new people... </p>

                <h5>Interests</h5>
                <p>Cook and eating lover. Reader. Entrepreneur. Photography lover. Coffee fanatic. Marathon runner. Ex Amateur Boxing Champion.</p>
            </div>

        </div>

    )
}

export default MainContent;