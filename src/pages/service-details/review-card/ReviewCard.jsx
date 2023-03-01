import React, { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const ReviewCard = ({ review }) => {
    const { reviewerName, reviewerEmail, reviewerImage, body, serviceId, serviceImage, serviceTitle } = review;

    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    const location = useLocation();
    const pathname = location?.pathname;
    const detailsPath = `/service/${serviceId}`;
    const myReviewsPath = `/my-reviews`;
    // console.log(pathname === detailsPathname);
    // console.log(serviceId);
    return (
        <div className='w-full p-4 my-4 border border-primary rounded-md min-h-48'>
            <div className='flex flex-col md:flex-row'>
                <div className='px-4 md:px-8 flex items-center justify-center'>
                    {
                        (detailsPath === pathname) &&
                        <div className="avatar">
                            <div className="w-28 rounded-full">
                                <img src={reviewerImage} alt='User' />
                            </div>
                        </div>
                    }
                    {
                        (myReviewsPath === pathname) &&

                        <div className="avatar">
                            <div className="w-28 rounded">
                                <img src={serviceImage} alt='User' />
                            </div>
                        </div>
                    }
                </div>
                <div className=' py-4 md:my-0 px-4 md:px-8 w-full'>
                    <div className='flex justify-between items-center'>
                        {
                            (detailsPath === pathname) &&
                            <div>
                                <p className=' font-semibold'>Reviewer Name : <span className='font-normal'>{reviewerName}</span></p>
                                <p className='text-sm font-semibold'>Reviewer Email : <span className='font-normal'>{reviewerEmail}</span></p>
                            </div>
                        }
                        {
                            (myReviewsPath === pathname) &&
                            <div>
                                <p className=' font-semibold'>Service Title : {serviceTitle}</p>
                                <p className='text-sm'>Service ID : {serviceId}</p>
                            </div>
                        }

                        {
                            (userEmail === reviewerEmail) &&
                            <div className='flex flex-col md:flex-row'>

                                <div>
                                    <button className='btn btn-sm btn-red-500 text-yellow-600 text-2xl bg-white border-1 md:mx-2'>
                                        <AiFillEdit></AiFillEdit>
                                    </button>
                                </div>
                                <div className='mb-2 md:mb-0'>
                                    <button className='btn btn-sm btn-red-500 text-red-500 text-2xl bg-white border-1 md:mx-2'>
                                        <AiFillDelete></AiFillDelete>
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='h-2/4 py-2 rounded-md'>
                        <div>
                            <p className='text-gray-500'>Review : {body}</p>
                        </div>

                    </div>
                    <div className='flex justify-end items-center my-2'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;