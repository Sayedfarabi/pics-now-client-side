import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const ContactMe = () => {
    const { user } = useContext(AuthContext);

    const form = useRef()
    const emailHandler = e => {
        e.preventDefault()

        emailjs.sendForm('service_5ka9bv9', 'template_6idhwfa', form.current, 'OnmnH2zSMoC9UfBmX')
            .then((result) => {
                console.log(result.text);
                toast.success("Your message all most send")
            }, (error) => {
                console.log(error.text);
                toast.error("Your message can't send")
            });

    }

    return (
        <div className='py-12 bg-rose-100'>
            <div className='text-center'>
                <h4 className='text-3xl border-b-4 border-primary inline'>CONTACT ME</h4>
                <p className='text-xl text-gray-500 my-4'>Question not answer yet? I am here to help!</p>
            </div>
            <div className='flex justify-center items-center'>
                <form ref={form} onSubmit={emailHandler} className="form-control w-1/2 md:2/3 py-8">
                    <label className="mb-2">
                        <input type="text" name='user_name' placeholder="Enter your Name" className="input  border-primary w-full text-center border-b-2 border-t-0 border-r-0 border-l-0" defaultValue={user?.displayName ? user?.displayName : ""} />
                    </label>
                    <label className="mb-2">
                        <input type="text" name='user_email' placeholder="Enter your Email" className="input input-bordered border-primary w-full text-center border-b-2 border-t-0 border-r-0 border-l-0" defaultValue={user?.email ? user?.email : ""} />
                    </label>
                    <label className="mb-2">
                        <input type="text" name='message' placeholder="Enter your Message" className="input input-bordered border-primary w-full text-center border-b-2 border-t-0 border-r-0 border-l-0" />
                    </label>
                    <label className="mb-2">
                        <input type="submit" value="Email" className='mt-4 input input-bordered  w-full rounded-md btn btn-md bg-black text-white border-2 hover:text-orange-500' />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;