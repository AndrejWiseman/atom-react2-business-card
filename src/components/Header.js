import React from 'react';
import avatar1 from '../images/avatar1.png';



function Header() {
    return (
        <div className='header'>
            <img src={ avatar1 } alt="profile pic"/>
        </div>
    )
}

export default Header;