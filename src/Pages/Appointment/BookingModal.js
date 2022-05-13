import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;

    const handelBooking = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const slot = event.target.slot.value;
        console.log(`name:${name} email:${email} time:${slot}`)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg">{name} </h3>

                    <form onSubmit={handelBooking} className="justify-items-center grid grid-cols-1 gap-5 mt-4">
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot} >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input name="phone" required type="number" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="input input-bordered w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;