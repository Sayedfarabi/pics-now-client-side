import React, { useContext } from 'react';
import ServiceCard from '../../components/card/ServiceCard';
import { DataContext } from '../../layout/Root';

const Services = () => {
    const { services } = useContext(DataContext)
    // console.log(services);
    return (
        <section>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-8'>
                {
                    services &&
                    services.map(service => {
                        return <ServiceCard
                            key={service._id}
                            service={service}>

                        </ServiceCard>
                    })
                }
            </div>

        </section>
    );
};

export default Services;