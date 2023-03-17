import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { DataContext } from '../../../layout/Root';

const ReviewCard = ({ review, setModalData }) => {
    const { _id, reviewerName, reviewerEmail, reviewerImage, body, serviceId, serviceImage, serviceTitle } = review;
    // console.log(_id);
    const { user } = useContext(AuthContext);
    const { reviewRefetch } = useContext(DataContext)
    const userEmail = user?.email;

    const location = useLocation();
    const pathname = location?.pathname;
    const detailsPath = `/service/${serviceId}`;
    const myReviewsPath = `/my-reviews`;

    const deleteHandler = (_id) => {
        fetch(`http://localhost:5000/deleteReview?id=${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('picsNow')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    reviewRefetch()
                    toast.success(result?.message)
                } else {
                    toast.error(result?.message)
                }
            })
    }

    return (
        <div className='w-full p-4 my-4 border border-primary rounded-md min-h-48 bg-gradient-to-l from-sky-200 to-indigo-200 accent-slate-200'>
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
                                <p className=' font-semibold text-xl'>Reviewer Name : <span className='font-normal'>{reviewerName}</span></p>
                                <p className='text-sm font-semibold'>Reviewer Email : <span className='font-normal'>{reviewerEmail}</span></p>
                            </div>
                        }
                        {
                            (myReviewsPath === pathname) &&
                            <div>
                                <p className=' font-semibold text-xl'>Service Title : {serviceTitle}</p>
                                <p className='text-sm'>Service ID : {serviceId}</p>
                            </div>
                        }

                        {
                            (userEmail === reviewerEmail) &&
                            <div className='flex flex-col md:flex-row'>

                                <div>
                                    <label onClick={() => setModalData(review)} htmlFor="update-review" className="btn btn-sm btn-red-500 text-yellow-600 text-2xl bg-white border-1 md:mx-"> <AiFillEdit></AiFillEdit></label>

                                </div>
                                <div className='mb-2 md:mb-0'>
                                    <button onClick={() => deleteHandler(_id)} className='btn btn-sm btn-red-500 text-red-500 text-2xl bg-white border-1 md:mx-2'>
                                        <AiFillDelete></AiFillDelete>
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='h-2/4 py-2 rounded-md'>
                        <div>
                            <p className='text-gray-800'>Review : {body}</p>
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