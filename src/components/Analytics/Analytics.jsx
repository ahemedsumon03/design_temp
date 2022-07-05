import React from 'react'
import './Analytics.css';
import Tech from '../../asset/img/tech.png';
import Field from '../../asset/img/field.png';

const Analytics = () => {
    return (
        <div className='analysitContainer'>
            <div className='analytics'>
                <div className='analyticsContainer'>
                    <h1>Our expressing pre-live analytics</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing  thought and typesetting industry. Lorem Ipsum has been the froma industry standard dummy text ever since the 1500s, when ana unknown printer took a galley of type and scrambled it to make a type lorem ipsum specimen book. </p>
                </div>
                <div className='imgContainer'>
                    <img src={Tech} alt="ai" className='tech' />
                </div>
            </div>
            <div className='analyticsexpressContainer'>
                <div className='analyticsexpress'>
                    <img src={Field} alt="field" className='fieldImg' />
                </div>
                <div className='analyticsexpressText'>
                    <h1>Our expressing real time analytics</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing  thought and typesetting industry. Lorem Ipsum has been the froma industry standard dummy text ever since the 1500s, when ana unknown printer took a galley of type and scrambled it to make a type lorem ipsum specimen book. </p>
                </div>
            </div>
        </div>
    )
}

export default Analytics
