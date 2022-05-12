import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero py-10   min-h-screen">
            <div className="hero-content     flex-col lg:flex-row-reverse">
                <img src={chair} alt="" className="max-w-sm  rounded-lg shadow-2xl" />
                <div className="py-4 mx-10">
                    <h1 className="text-5xl  font-bold py-3">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton >Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;