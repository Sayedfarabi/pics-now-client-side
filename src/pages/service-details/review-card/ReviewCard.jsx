import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const ReviewCard = () => {
    return (
        <div className='w-full p-4 my-4 border border-primary rounded-md min-h-48'>
            <div className='flex flex-col md:flex-row'>
                <div className='px-4 md:px-8 flex items-center justify-center'>
                    <div className="avatar">
                        <div className="w-28 rounded-full">
                            <img className='' src="https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png" alt='User' />
                        </div>
                    </div>
                </div>
                <div className=' my-4 md:my-0 px-4 md:px-8'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className=' font-semibold'>User Name : Sayed</p>
                            <p className='text-sm'>User Email : farabisayed6099@gmail.com</p>
                        </div>
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
                    </div>
                    <div className='h-2/4 py-2 rounded-md'>
                        <div>
                            <p className='text-gray-500'>Review : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ut delectus adipisci voluptatem odio! Quaerat, molestias dolorum. Nostrum, facilis aut.</p>
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