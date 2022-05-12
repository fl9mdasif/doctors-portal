import React from 'react';
const CardInfo = ({ img, title, colors }) => {

    return (
        <div className="">
            <div className={`text-white items-center  card   lg:card-side bg-base-100 shadow-xl ${colors}`}>
                <figure className="py-4 pl-5"><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div >
            </div >
        </div >
    );
};

export default CardInfo;