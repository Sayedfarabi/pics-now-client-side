import React from 'react';

const ServiceDetailsCard = ({ service }) => {
    const { title, image, body, price } = service;
    return (
        <div className="card w-full mx-auto p-4 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div>
                        <h2 className="text-xl md:text-2xl">Service Name : <span className='text-primary'>{title}</span></h2>
                    </div>
                    <div>
                        <h2 className='text-sm md:text-xl font-semibold'>Service Price : <span className='text-yellow-400'>$</span><span className='text-secondary'>{price}</span></h2>
                    </div>
                </div>
                <div className='my-4 text-md md:text-base md:my-8'>
                    <p className='font-semibold text-xl'>Our Service : <span className='text-gray-500 font-medium text-base'>{body}</span></p>
                </div>
            </div>
            <figure>
                <img className='w-3/4 md:w-2/4 rounded-2xl hover:border-2 hover:border-secondary hover:cursor-pointer' src={image} alt="Shoes" />
            </figure>
        </div>
    );
};

export default ServiceDetailsCard;