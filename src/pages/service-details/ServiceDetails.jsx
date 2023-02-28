import React from 'react';
import ReviewCard from './review-card/ReviewCard';
import ServiceDetailsCard from './service-details-card/ServiceDetailsCard';

const ServiceDetails = () => {
    return (
        <section>
            <div className='mx-8 md:mx-12 my-8 md:my-12'>
                <div>
                    <div>
                        <ServiceDetailsCard></ServiceDetailsCard>
                    </div>
                    <div className='my-4 md:my-8'>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                    </div>
                    <div className='my-12'>
                        <div className='py-8 text-center'>
                            <h2 className='text-2xl inline border-b-2 border-primary font-semibold'>GIVE ME YOUR VALUABLE REVIEW</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className="form-control w-2/2 md:w-2/4 py-8">
                                <form>
                                    <label className="input-group">
                                        <input type="text" placeholder="Enter your review" className="input input-bordered border-primary w-full" />
                                        <input type="submit" value="Review" className='btn btn-md bg-black text-white border-2 hover:text-orange-500' />
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;