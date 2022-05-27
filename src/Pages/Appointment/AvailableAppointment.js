import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('https://damp-bastion-53033.herokuapp.com/service')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-8">
            <h2 className=" mb-4 text-2xl text-secondary text-center">Available appointment : {format(date, 'PP')}</h2>
            <div className=' container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service =>
                        <Service
                            service={service}
                            key={service._id}
                            setTreatment={setTreatment}
                        ></Service>)
                }
            </div>
            {treatment &&
                <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>}

        </div>
    );
};

export default AvailableAppointment;