import React from 'react'
import './BeFooter.css';
import newlogo from '../../asset/img/new.png';
import dip from '../../asset/img/deep.png';

const BeFooter = () => {
    return (
        <div className='befooter'>
            <div className='container'>
                <img className='logo' src={newlogo} alt="logo" />
                <h4>lab</h4>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing  thought and typesetting industry. Lorem Ipsum has been the froma industry standard dummy text ever since the 1500s,</p>
            <div className='dipContain'>
                <img className='dipImg' src={dip} alt="dip" />
            </div>
        </div>
    )
}

export default BeFooter
