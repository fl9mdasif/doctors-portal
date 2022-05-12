import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
// import PrimaryButton from '../Shared/PrimaryButton';
import PrimaryButton from '../../shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center' >
            <div className='flex-1 hidden lg:block ' >
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div >
            <div className='flex-1 px-5 pb-5' >
                <h3 className='text-xl text-primary font-bold  m-5' > Appointment</h3 >
                <h2 className='text-3xl text-white px-5 pb-5' > Make an Appointment Today</h2 >
                <p className='text-white px-5 pb-5' > Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur.Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p >
                <div className="px-5 pb-5" >
                    <PrimaryButton >Get Started</PrimaryButton>
                </div >
            </div >
        </section >
    );
};

export default MakeAppointment;