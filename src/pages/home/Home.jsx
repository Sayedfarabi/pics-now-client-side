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
            <section>
                <HomeServices></HomeServices>
            </section>
            <section>
                <Examples></Examples>
            </section>
            <section>
                <ClientTestimonials></ClientTestimonials>
            </section>
            <section>
                <ContactMe></ContactMe>
            </section>

        </main>
    );
};

export default Home;