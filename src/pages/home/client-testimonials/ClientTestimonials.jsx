import React from 'react';
import ClientTestimonialCard from './client-testimonial-card/ClientTestimonialCard';

const ClientTestimonials = () => {
    return (
        <div className='py-12'>
            <div className='text-center'>
                <h4 className='text-4xl inline border-b-4 border-primary '>Testimonial</h4>
                <p className='text-xl text-gray-500 my-4'>Here are some reviews from my clients</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 py-8'>
                <ClientTestimonialCard></ClientTestimonialCard>
                <ClientTestimonialCard></ClientTestimonialCard>
                <ClientTestimonialCard></ClientTestimonialCard>
                <ClientTestimonialCard></ClientTestimonialCard>
                <ClientTestimonialCard></ClientTestimonialCard>
                <ClientTestimonialCard></ClientTestimonialCard>

            </div>
        </div>
    );
};

export default ClientTestimonials;