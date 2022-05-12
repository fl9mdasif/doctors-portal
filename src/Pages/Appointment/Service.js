import React from 'react';
// import PrimaryButton from '../shared/PrimaryButton';

const Service = ({ service }) => {
    const { slots, name } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-lg">
            <div class="card-body text-center">
                <h2 class="text-secondary card-title justify-center">{name}</h2>
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
                <div class="card-actions text-white justify-center">
                    <button className="btn text-white btn-secondary bg-gradient-to-r from-secondary to-primary" disabled={slots.length === 0}>BOOK APPOINTMENT</button>
                </div>
            </div>
        </div>
    );
};

export default Service;