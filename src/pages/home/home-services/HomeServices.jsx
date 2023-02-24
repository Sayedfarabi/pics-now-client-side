import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../../components/card/ServiceCard';

const HomeServices = () => {
    return (
        <div className='py-12'>
            <div className='text-center'>
                <h1 className='text-4xl border-b-4 border-orange-500 inline'> Services </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-8'>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
            <div className='text-center'>
                <Link to={""}>
                    {/* <h5 className='hover:text-orange-500 text-2xl text-center '>See More</h5> */}
                    <button className='btn btn-sm btn-outline border-primary hover:text-primary border-2'>See more</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeServices;