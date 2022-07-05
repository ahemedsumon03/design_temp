import React from 'react'
import './Banner.css';
import Ai from '../../asset/img/ai.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='bannerContainer'>
                <div className='bannerPart'>
                    <h1>Soccer game <span className='precolor'>predictions</span> with AI analytics</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                </div>
                <img src={Ai} alt="analytics" className='aiimage' />
            </div>
        </div>
    )
}

export default Banner
