import React from 'react';
import img from '../../../assets/images/treatment.png'
import PrimaryButton from '../../shared/PrimaryButton';

const Terms = () => {
    return (
        <div>
            <div className="hero  min-h-screen my-10">
                <div className="mx-5 hero-content flex-col lg:flex-row">
                    <img src={img} className="sm:w-24  lg:w-96 rounded-lg shadow-2xl" alt="" />
                    <div className="mx-5">
                        <h1 className="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6" > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsumis that it has a more - or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page</p >
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div >
                </div >

            </div >
        </div >
    );
};

export default Terms;