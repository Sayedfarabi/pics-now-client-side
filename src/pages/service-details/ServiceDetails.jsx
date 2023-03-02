import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
import { DataContext } from '../../layout/Root';
import ReviewCard from './review-card/ReviewCard';
import ServiceDetailsCard from './service-details-card/ServiceDetailsCard';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { users, reviewsData, isLoading, refetch } = useContext(DataContext);
    const reviews = reviewsData?.data;
    // Routes Loader Data : 
    const data = useLoaderData();
    const service = data?.data;

    // Auth User Info : 
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userImage = user?.photoURL;

    const serviceId = service?._id;
    const serviceTitle = service?.title;
    const serviceImage = service?.image;
    const serviceReviews = reviews?.filter(review => review.serviceId === serviceId);


    const { register, handleSubmit, resetField } = useForm();

    const reviewHandler = data => {
        if (data) {
            const reviewData = {
                serviceId: serviceId,
                serviceTitle: serviceTitle,
                serviceImage: serviceImage,
                reviewerName: userName,
                reviewerEmail: userEmail,
                reviewerImage: userImage,
                body: data?.review
            }
            fetch("https://pics-now-server-side.vercel.app/addReview", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(reviewData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        refetch()
                        toast.success(data?.message)
                    } else {
                        toast.error(data.message)
                    }
                })
        }
        resetField("review")
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section className='bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100'>
            <div className='px-8 md:px-12 py-8 md:py-12'>
                <div className='py-8 text-center'>
                    <h2 className='text-2xl inline border-b-2 border-primary font-semibold'>SERVICE DESCRIPTION</h2>
                </div>
                <div>
                    <div>
                        <div className='my-8'>
                            <h2 className='text-2xl inline border-b border-primary font-semibold'>Service Details :</h2>
                        </div>
                        <div>
                            <ServiceDetailsCard
                                service={service}
                            >
                            </ServiceDetailsCard>
                        </div>
                    </div>
                    {
                        serviceReviews.length > 0 &&
                        <div className='my-4 md:my-8'>
                            <div className='my-8'>
                                <h2 className='text-2xl inline border-b border-primary font-semibold'>User Reviews :</h2>
                            </div>
                            <div>
                                {
                                    serviceReviews &&
                                    serviceReviews.map(review => {
                                        return <ReviewCard
                                            key={review?._id}
                                            review={review}>
                                        </ReviewCard>
                                    })
                                }
                            </div>
                        </div>
                    }
                    <div className='my-12'>
                        <div className='py-8 text-center'>
                            <h2 className='text-2xl inline border-b-2 border-primary font-semibold'>GIVE ME YOUR VALUABLE REVIEW</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className="form-control w-2/2 md:w-2/4 py-8">
                                <form onSubmit={handleSubmit(reviewHandler)}>
                                    <label className="input-group">
                                        <input {...register("review", { required: true })} type="text" name='review' placeholder="Enter your review" className="input input-bordered border-primary w-full" />
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