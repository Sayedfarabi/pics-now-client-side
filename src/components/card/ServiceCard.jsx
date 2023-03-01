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
                    <Link to={`/service/${_id}`}>
                        <button className="btn btn-sm text-secondary hover:text-orange-500 bg-black">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;