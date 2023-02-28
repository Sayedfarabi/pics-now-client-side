import React from 'react';

const ContactMe = () => {
    return (
        <div className='py-12'>
            <div className='text-center'>
                <h4 className='text-3xl border-b-4 border-primary inline'>CONTACT ME</h4>
                <p className='text-xl text-gray-500 my-4'>Question not answer yet? I am here to help!</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className="form-control w-1/2 md:2/3 py-8">
                    {/* <label className="label">
                        <span className="label-text">Enter Your Email</span>
                    </label> */}
                    <label className="input-group">
                        <input type="text" placeholder="Enter your Question" className="input input-bordered border-primary w-full" />
                        <input type="submit" value="Email" className='btn btn-md bg-black text-white border-2 hover:text-orange-500' />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;