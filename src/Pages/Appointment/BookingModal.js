import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handelBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(`time:${slot}`)

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value

        }

        fetch('https://damp-bastion-53033.herokuapp.com/booking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment is set , ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`You already have an Appointment  , ${data.booking?.date} at ${data.booking?.slot}`)

                }
            })

        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg">{name} </h3>

                    <form onSubmit={handelBooking} className="justify-items-center grid grid-cols-1 gap-5 mt-4">
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) =>
                                    <option key={index} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input name="email" type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input name="phone" required type="number" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="input input-bordered w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;