import React from 'react';
import ClientTestimonialCard from './client-testimonial-card/ClientTestimonialCard';
import user1 from '../../../assets/images/testimonial-users/user-1.jpg';
import user2 from '../../../assets/images/testimonial-users/user-2.jpg';
import user3 from '../../../assets/images/testimonial-users/user-3.jpeg';
import user4 from '../../../assets/images/testimonial-users/user-4.jpg';
import user5 from '../../../assets/images/testimonial-users/user-5.jpg';
import user6 from '../../../assets/images/testimonial-users/user-6.jpg';

const ClientTestimonials = () => {
    const testimonialData = [
        {
            _id: "testimonial_001",
            image: user1,
            name: "Brenda Kelly",
            organization: "Co-Founder at xyz",
            review: "picsNow is the best photography service I have ever used. The quality of their photos is top-notch and they always deliver on time. Their customer service is also excellent and they are always willing to go the extra mile to make sure that I am satisfied with the end product. Highly recommended!"
        },
        {
            _id: "testimonial_002",
            image: user2,
            name: "Edward Johnson",
            organization: "Co-Founder at EJ logistic",
            review: "I recently used picsNow service for a family event and was extremely pleased with the results. The photographer was professional, friendly, and had an eye for capturing the perfect moments. The photos were of high quality and I received them in a timely manner. I highly recommend picsNow service for any photography needs!"
        },
        {
            _id: "testimonial_003",
            image: user3,
            name: "James Cook",
            organization: "Co-Founder at salmon tech",
            review: "picsNow service is the perfect photography service for any occasion. The quality of their work is top-notch and they are always willing to go the extra mile to make sure you get exactly what you want. Their customer service is also excellent, always responding quickly and professionally. I highly recommend picsNow for any photography needs!"
        },
        {
            _id: "testimonial_004",
            image: user4,
            name: "Debra Smith",
            organization: "Co-Founder at venture",
            review: "picsNow is an amazing photography service. They have a wide range of experienced photographers who know how to capture the best moments with their cameras. I've used them for my wedding and family portraits and the results have never been anything short of perfect. Their commitment to quality is unmatched and I would highly recommend them for any special occasion or event."
        },
        {
            _id: "testimonial_005",
            image: user5,
            name: "Joshua Harris",
            organization: "Co-Founder at scott tech",
            review: "After searching for a while, I finally found picsNow service to capture some special moments of our family. The results were amazing! We received beautiful photos that captured our family perfectly and the quality was simply outstanding. The customer service was exceptional as well, they were always quick to respond and answer any questions we had. picsNow is definitely worth the money and I highly recommend them!"
        },
        {
            _id: "testimonial_006",
            image: user6,
            name: "Matthew Williams",
            organization: "Co-Founder at SC sears",
            review: "picsNow has been a great resource for my photography needs. The service is reliable and the quality of their images is top-notch. I have been using picsNow for my project for over a year now, and I'm always impressed with the results. Highly recommended!"
        }
    ]
    return (
        <div className='py-12'>
            <div className='text-center'>
                <h4 className='text-3xl inline border-b-4 border-primary '>TESTIMONIAL</h4>
                <p className='text-xl text-gray-500 my-4'>Here are some reviews from my clients</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-8'>
                {
                    testimonialData &&
                    testimonialData.map(data => {
                        return <ClientTestimonialCard
                            key={data._id}
                            data={data}>

                        </ClientTestimonialCard>
                    })
                }

            </div>
        </div>
    );
};

export default ClientTestimonials;