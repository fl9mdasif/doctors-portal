import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import Info from './Info';
import Services from './Services';
import Terms from './Terms';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Footer from '../../shared/Footer';
import Banner from './Banar';


const Home = () => {
    return (
        <div>
            <Banner />
            <Info img={clock} />
            <Services />
            <Terms />
            <MakeAppointment />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;