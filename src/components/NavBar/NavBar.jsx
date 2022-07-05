import React from 'react'
import './NavBar.css';
import Logo from '../../asset/img/logo.png';
import NavWithLogo from '../../asset/img/navlogo.png';

const NavBar = () => {
    return (
        <div className='navbar'>
            <img className='logoicon' src={Logo} alt="newLogo" />
            <div className='navlink'>
                <ul>
                    <li>Who we are</li>
                    <li>What we do</li>
                    <div className='imgNav'>
                        <img src={NavWithLogo} alt="navlogo" />
                        <ul>
                            <li>lab</li>
                        </ul>
                    </div>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
