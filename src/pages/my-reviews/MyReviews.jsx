import React, { useContext } from 'react';
import Loading from '../../components/loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
import { DataContext } from '../../layout/Root';
import ReviewCard from '../service-details/review-card/ReviewCard';

const MyReviews = () => {
    const { user, loading } = useContext(AuthContext);
    const userEmail = user?.email;
    const { reviewsData, isLoading, refetch } = useContext(DataContext);
    const reviews = reviewsData?.data;
    const serviceReviews = reviews?.filter(review => review.reviewerEmail === userEmail)


    // console.log(serviceReviews);

    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='mx-8 md:mx-12 my-8'>
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
                                review={review}>
                            </ReviewCard>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default MyReviews;