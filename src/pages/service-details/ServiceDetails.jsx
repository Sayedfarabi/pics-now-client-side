import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
import { DataContext } from '../../layout/Root';
import ReviewCard from './review-card/ReviewCard';
import ServiceDetailsCard from './service-details-card/ServiceDetailsCard';

const ServiceDetails = () => {
    const [modalData, setModalData] = useState(null);
    const { user } = useContext(AuthContext);
    const { reviewsData, isLoading, reviewRefetch } = useContext(DataContext);
    const reviews = reviewsData?.data;
    // Routes Loader Data : 
    const data = useLoaderData();
    const service = data?.data;
    // console.log(service);
    // console.log(modalData);
    // Auth User Info : 
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userImage = user?.photoURL;

    const serviceId = service?._id;
    const serviceTitle = service?.title;
    const serviceImage = service?.image;
    const serviceReviews = reviews?.filter(review => review.serviceId === serviceId);


    const { register, handleSubmit, resetField } = useForm();
    const { register: updateReviewRegister, handleSubmit: updateReviewHandleSubmit } = useForm();

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
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('picsNow')}`
                },
                body: JSON.stringify(reviewData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        reviewRefetch()
                        toast.success(data?.message)
                    } else {
                        toast.error(data.message)
                    }
                })
        }
        resetField("review")
    }

    const updateReview = data => {
        if (data) {

            fetch(`https://pics-now-server-side.vercel.app/updateReview?id=${modalData?._id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('picsNow')}`
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result?.success) {
                        setModalData(null)
                        reviewRefetch()
                        toast.success(result?.message)
                    } else {
                        toast.error(result?.message)
                        console.log(result);
                    }
                })
        }
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section className='bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100'>
            <div className='p-8 md:p-12'>
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
                        serviceReviews?.length > 0 &&
                        <div className='my-4 md:my-8'>
                            <div className='my-8'>
                                <h2 className='text-2xl inline border-b border-primary font-semibold'>User Reviews :</h2>
                            </div>
                            <div>
                                {
                                    serviceReviews &&
                                    serviceReviews?.map(review => {
                                        return <ReviewCard
                                            key={review?._id}
                                            review={review}
                                            setModalData={setModalData}
                                        >
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

                {
                    modalData &&
                    <div>
                        <input type="checkbox" id="update-review" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="update-review" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">For <span className='text-blue-400'>{modalData?.serviceTitle}</span> review update!</h3>
                                <form onSubmit={updateReviewHandleSubmit(updateReview)}>
                                    <div className='py-4'>
                                        <input {...updateReviewRegister("body", { required: true })} type={"text"} className="textarea w-full textarea-success py-8" name="body" defaultValue={modalData?.body}>
                                        </input>
                                    </div>
                                    <div className='flex justify-end items-center my-2'>
                                        <div>
                                            <input type="submit" value="Update" className='btn btn-sm bg-orange-500 text-white' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default ServiceDetails;