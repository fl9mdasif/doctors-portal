import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-8">
            <h2 className=" mb-4 text-2xl text-secondary text-center">Available appointment : {format(date, 'PP')}</h2>
            <div className=' container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;