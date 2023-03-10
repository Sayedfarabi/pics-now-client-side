import React, { useContext } from 'react';
import ServiceCard from '../../components/card/ServiceCard';
import { DataContext } from '../../layout/Root';
import ContactMe from '../home/contact-me/ContactMe';

const Services = () => {
    const { services } = useContext(DataContext)
    // console.log(services);
    return (
        <section>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-8 bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100'>
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
            <div>
                <ContactMe></ContactMe>
            </div>

        </section>
    );
};

export default Services;