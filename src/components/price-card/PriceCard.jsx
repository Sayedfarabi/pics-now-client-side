import React from 'react';

const PriceCard = ({ data }) => {
    return (
        <div
            className={`text-center border-2 md:border-4 md:border-3 border-gray-400 ${data?.selected && "bg-gray-800 text-white border-none"}`}>
            <div className='h-80 flex flex-col justify-evenly items-center px-2'>
                <h1 className='text-3xl font-semibold'>{data?.title}</h1>
                <p>{data?.body}</p>
                <h1 className='text-6xl font-bold text-primary'>${data?.price}</h1>
                <p className='text-xl text-gray-500'>HOURLY</p>
            </div>

        </div>
    );
};

export default PriceCard;