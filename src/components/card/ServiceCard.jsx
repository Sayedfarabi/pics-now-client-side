import React from 'react';

const ServiceCard = () => {
    return (
        <div className="card w-80 glass mx-auto">
            <figure className='px-10 py-10 '>
                <img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="photography-service" className='rounded-md' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm text-secondary hover:text-orange-500 bg-black">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;