import React from 'react'
import './Footer.css';
import logo from '../../asset/img/whitelogo.png';
import facebook from '../../asset/img/facebook.png';
import twitter from '../../asset/img/twitter.png';
import instagram from '../../asset/img/instagram1.png';
import instagram3 from '../../asset/img/instagram3.png';
import instagram2 from '../../asset/img/instagram2.png';

const Footer = () => {
    return (
        <div className='mainfooter'>
            <div className='footer'>
                <div className='left'>
                    <img className='whitelogo' src={logo} alt="logo" />
                    <p>Lorem Ipsum is simply dummy text of the printing  thought and typesetting industry. Lorem Ipsum has been the from.</p>
                    <div className='iconContainer'>
                        <img className='facebook' src={facebook} alt="facebook" />
                        <img className='twitter' src={twitter} alt="twitter" />
                        <img className='instagram' src={instagram} alt="instagram" />
                        <img className='instagram3' src={instagram3} alt="instagram3" />
                        <img className='instagram2' src={instagram2} alt="instagram2" />
                    </div>
                </div>
                <div className='center'>
                    <h3>Quick Link</h3>
                    <p>Who we are</p>
                    <p>Who we do</p>
                    <p>DeepOdd Lab</p>
                    <p>Contact Us</p>
                </div>

                <div className='right'>
                    <p>General inquires</p>
                    <p>info@webcone.com</p>
                    <p>Phone Number</p>
                    <p>011 02224 5552</p>
                </div>
            </div>
            <div className='line'></div>
            <p className='smText'>all rights reserves @2021</p>
        </div>

    )
}

export default Footer
