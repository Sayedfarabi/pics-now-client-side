import React from 'react';
import ClientTestimonials from './client-testimonials/ClientTestimonials';
import ContactMe from './contact-me/ContactMe';
import Examples from './examples/Examples';
import HomeServices from './home-services/HomeServices';
import Slider from './slider/Slider';
import WhoWeAreSection from './who-we-are-section/WhoWeAreSection';
import CounterSection from './counter-section/CounterSection';
import OurPriceSection from './our-price-section/OurPriceSection';
import CustomPackageSection from './custom-package-section/CustomPackageSection';
import LogoSection from './logoes-section/LogoSection';

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
                    <WhoWeAreSection></WhoWeAreSection>
                </section>
                <section>
                    <CounterSection></CounterSection>
                </section>
                <section>
                    <Examples></Examples>
                </section>
                <section>
                    <OurPriceSection></OurPriceSection>
                </section>
                <section>
                    <CustomPackageSection></CustomPackageSection>
                </section>
                <section>
                    <LogoSection></LogoSection>
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