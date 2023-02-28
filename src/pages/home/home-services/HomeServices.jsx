import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../../components/card/ServiceCard';
import { DataContext } from '../../../layout/Root';

const HomeServices = () => {
    const { services } = useContext(DataContext);
    // console.log(services);
    return (
        <div className='py-12'>
            <div className='text-center'>
                <h1 className='text-3xl border-b-4 border-orange-500 inline'> SERVICES </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-8'>
                {
                    services &&
                    services.slice(0, 3).map(service => {
                        return <ServiceCard
                            key={service._id}
                            service={service}>
                        </ServiceCard>
                    })
                }

            </div>
            <div className='text-center'>
                <Link to={"/services"}>

                    <button className='btn btn-sm btn-outline border-primary hover:text-primary border-2'>See more</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeServices;