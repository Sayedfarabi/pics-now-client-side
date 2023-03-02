import React from 'react';
import ClientTestimonials from './client-testimonials/ClientTestimonials';
import ContactMe from './contact-me/ContactMe';
import Examples from './examples/Examples';
import HomeServices from './home-services/HomeServices';
import Slider from './slider/Slider';

const Home = () => {
    return (
        <main>
            <header>
                <Slider></Slider>
            </header>
            <section className='bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100'>
                <section>
                    <HomeServices></HomeServices>
                </section>
                <section>
                    <Examples></Examples>
                </section>
                <section>
                    <ClientTestimonials></ClientTestimonials>
                </section>
            </section>
            <section>
                <ContactMe></ContactMe>
            </section>

        </main>
    );
};

export default Home;