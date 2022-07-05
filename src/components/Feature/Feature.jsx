import React from 'react'
import './Feature.css';
import vector from '../../asset/img/Vector.png';
import vc18 from '../../asset/img/vc18.png';
import vc3 from '../../asset/img/vc3.png';
import vc4 from '../../asset/img/vc4.png';
import vc2 from '../../asset/img/vc2.png';
import vc5 from '../../asset/img/vc5.png';
import vc6 from '../../asset/img/vc6.png';
import vc7 from '../../asset/img/vc7.png';
import vc8 from '../../asset/img/vc8.png';
import vc9 from '../../asset/img/vc9.png';
import vc10 from '../../asset/img/vc10.png';
import vc11 from '../../asset/img/vc11.png';
import vc12 from '../../asset/img/vc12.png';
import vc13 from '../../asset/img/vc13.png';

const Feature = () => {
    return (
        <div className='feature'>
            <div className="featureContainer">
                <h1>Our Features</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div className='fetaures'>
                <div className='onefeature'>
                    <img className='vc1' src={vc3} alt="vc1" />
                    <img className='vc2' src={vector} alt="vd" />
                    <h3>Machine learning</h3>
                    <p>Lorem Ipsum is simply dummy text ofa the printing and typesetting industry. To Lorem Ipsum has been the industry's As standard dummy text ever since the 1500s, when an unknown printer took.</p>
                </div>
                <div className='twofeature'>
                    <img className='vc18' src={vc18} alt="tf" />
                    <img src={vc4} className="vc8" alt="vc4" />
                    <img src={vc5} className="vc5" alt="vc5" />
                    <img src={vc6} className="vc6" alt="vc6" />
                    <img src={vc7} className="vc7" alt="vc7" />
                    <img src={vc8} className="vc9" alt="vc8" />
                    <img src={vc9} className="vc10" alt="vc9" />
                    <img src={vc10} className="vc11" alt="vc10" />
                    <img src={vc11} className="vc12" alt="vc11" />
                    <img src={vc12} className="vc13" alt="vc12" />
                    <img src={vc13} className="vc14" alt="vc13" />
                    <h3>Predictive models</h3>
                    <p>Lorem Ipsum is simply dummy text ofa the printing and typesetting industry. To Lorem Ipsum has been the industry's As standard dummy text ever since the 1500s, when an unknown printer took.</p>
                </div>
                <div className='lastfeature'>
                    <img className='last' src={vc2} alt="vc2" />
                    <h3>Proprietary algorithms</h3>
                    <p>Lorem Ipsum is simply dummy text ofa the printing and typesetting industry. To Lorem Ipsum has been the industry's As standard dummy text ever since the 1500s, when an unknown printer took.</p>
                </div>
            </div>
        </div>
    )
}

export default Feature
