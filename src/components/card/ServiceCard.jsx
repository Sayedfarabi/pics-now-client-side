import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, image, title, body } = service;
    return (
        <div className="card w-80 glass mx-auto">
            <figure className='px-10 py-10 '>
                <img src={image} alt="photography-service" className='rounded-md h-52' />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{title}</h2>
                <p>{body.length > 100 ? body.slice(0, 100) : body} ...</p>
                <div className="card-actions justify-end">
                    {/* id must be dynamic  */}
                    <Link to={`/service/:${_id}`}>
                        <button className="btn btn-sm text-secondary hover:text-orange-500 bg-black">Details</button>
                    </Link>
                </div>
            </div>
        </div>
        // How to park your car at your garage?
        // https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
    );
};

export default ServiceCard;