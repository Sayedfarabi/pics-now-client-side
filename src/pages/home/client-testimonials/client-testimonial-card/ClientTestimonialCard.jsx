import React from 'react';

const ClientTestimonialCard = ({ data }) => {
    const { image, name, organization, review } = data;
    return (
        <div className='w-72 border-2 rounded-md bg-base-100 mx-auto relative my-12 py-4'>
            <div className="avatar">
                <div className="w-24 rounded-full absolute -top-20 -right-48 border-primary border-2"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false">
                    <img src={image} alt="Reviewer" />
                </div>
            </div>
            <div className='text-center py-2'>
                <p className='text-amber-500'>{name} <br /> <span className='text-sm text-gray-500'>{organization}</span></p>
            </div>
            <div>
                <div className='flex justify-center items-center mt-2'>
                    <div className="rating rating-xs mx-auto">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div>
                    <blockquote className='mx-2 text-center'>
                        {review}
                    </blockquote>
                </div>

            </div>

        </div>
    );
};

export default ClientTestimonialCard;