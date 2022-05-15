import React from 'react';
// import PrimaryButton from '../shared/PrimaryButton';

const Service = ({ service, setTreatment }) => {
    const { slots, name } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-lg">
            <div className="card-body text-center">
                <h2 className="text-secondary card-title justify-center">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            :
                            <span className="text-red-500">No slots available</span>
                    }
                </p>
                <p>
                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
                </p>
                <div className="card-actions text-white justify-center">

                    {/* modal-button */}
                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        className="btn text-white btn-secondary bg-gradient-to-r from-secondary to-primary"
                        disabled={slots.length === 0}
                    >BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Service;