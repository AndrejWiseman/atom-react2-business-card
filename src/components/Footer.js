import React from 'react';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import insta from '../images/insta.png';
import linked from '../images/linked.png';
import github from '../images/github.png';


function Footer() {
    return (
        <div className="footer">
            <button><img src={ twitter } alt="social"/></button>
            <button><img src={ facebook } alt="social"/></button>

            {/*<a href="instagram://user?username=mudri.andrej" className='instalink' target='_blank'><img src={ insta } alt="social"/></a>*/}

            <a href={'https://www.instagram.com/mudri.andrej'} className='instalink' target='_blank'><img src={ insta } alt="social"/></a>


            {/*<button><img src={ insta } alt="social"/></button>*/}
            <button><img src={ linked } alt="social"/></button>
            <button><img src={ github } alt="social"/></button>
        </div>
    )
}

export default Footer;





