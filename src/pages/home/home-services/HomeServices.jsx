import React, { useContext, useState } from 'react';
import ServiceCard from '../../../components/card/ServiceCard';
import { DataContext } from '../../../layout/Root';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const HomeServices = () => {
    const { services } = useContext(DataContext);
    const limitServices = services.slice(0, 3);
    const [homeServices, setHomeServices] = useState(limitServices);
    const [isMoreButton, setIsMoreButton] = useState(true)


    const seeMoreHandle = () => {
        setIsMoreButton(false)
        setHomeServices(services)
    }
    const lessMoreHandler = () => {
        setIsMoreButton(true)
        setHomeServices(limitServices)
    }
    return (
        <div className='py-12'>
            <div className='text-center'>
                <h1 className='text-3xl border-b-4 border-orange-500 inline'> SERVICES </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-8'>
                {
                    homeServices &&
                    homeServices.map(service => {
                        return <ServiceCard
                            key={service._id}
                            service={service}>
                        </ServiceCard>
                    })
                }

            </div>
            <div className='text-center'>


                {
                    isMoreButton ?
                        <button onClick={seeMoreHandle} className='btn btn-sm btn-outline border-primary hover:text-primary border-2'><span className='mx-2'>See More</span> <AiOutlineDown></AiOutlineDown></button>
                        :
                        <button onClick={lessMoreHandler} className='btn btn-sm btn-outline border-primary hover:text-primary border-2'><span className='mx-2'>Lee More</span> <AiOutlineUp></AiOutlineUp></button>

                }

            </div>
        </div>
    );
};

export default HomeServices;