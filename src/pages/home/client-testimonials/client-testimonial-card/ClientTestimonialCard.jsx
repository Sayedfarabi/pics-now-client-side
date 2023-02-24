import React from 'react';

const ClientTestimonialCard = () => {
    return (
        <div className='w-56 h-72 border-2 rounded-md bg-base-100 mx-auto relative my-12'>
            <div className="avatar">
                <div className="w-24 rounded-full absolute -top-20 -right-40 border-white border-4">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" />
                </div>
            </div>
            <div className='text-center py-2'>
                <p className='text-amber-500'>Avinash Kr <br /> <span className='text-sm text-gray-500'>Co-Founder at xyz</span></p>
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
                    <blockquote className='mx-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, sequi. Repudiandae quae, animi officia eveniet suscipit
                    </blockquote>
                </div>




            </div>

        </div>
    );
};

export default ClientTestimonialCard;