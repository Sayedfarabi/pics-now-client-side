import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Loading from '../../components/loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
import { DataContext } from '../../layout/Root';
import ReviewCard from '../service-details/review-card/ReviewCard';

const MyReviews = () => {
    const { user, loading } = useContext(AuthContext);
    const [modalData, setModalData] = useState(null);
    const { register, handleSubmit } = useForm();
    const userEmail = user?.email;
    const { reviewsData, isLoading, reviewRefetch } = useContext(DataContext);
    const reviews = reviewsData?.data;
    const serviceReviews = reviews?.filter(review => review.reviewerEmail === userEmail)


    // console.log(serviceReviews);

    const updateReview = data => {
        if (data) {

            fetch(`http://localhost:5000/updateReview?id=${modalData?._id}`, {
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

    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='px-8 md:px-12 py-8'>
            <div>
                {
                    serviceReviews.length > 0 ?
                        <div className='py-8 text-center'>
                            <h2 className='text-2xl inline border-b-2 border-primary font-semibold'>YOUR ALL SERVICE REVIEWS</h2>
                        </div>
                        :
                        <div className='py-8 text-center'>
                            <h2 className='text-xl font-semibold'>YOU HAVE NOT ANY REVIEWS</h2>
                        </div>
                }
                <div>
                    {
                        serviceReviews &&
                        serviceReviews.map(review => {
                            return <ReviewCard
                                key={review?._id}
                                review={review}
                                setModalData={setModalData}
                            >
                            </ReviewCard>
                        })
                    }
                </div>
                <div>
                    {
                        modalData &&
                        <div>
                            <input type="checkbox" id="update-review" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="update-review" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">For <span className='text-blue-400'>{modalData?.serviceTitle}</span> review update!</h3>
                                    <form onSubmit={handleSubmit(updateReview)}>
                                        <div className='py-4'>
                                            <input {...register("body", { required: true })} type={"text"} className="textarea w-full textarea-success py-8" name="body" defaultValue={modalData?.body}>
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
            </div>
        </section>
    );
};

export default MyReviews;