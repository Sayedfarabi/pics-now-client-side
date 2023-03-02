import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';


const AddService = () => {
    const imgBbKey = process.env.REACT_APP_imageBb_api_key;
    const imgBbApi = `https://api.imgbb.com/1/upload?key=${imgBbKey}`;
    const [error, setError] = useState();
    const { register, handleSubmit, formState: { errors }, resetField } = useForm();

    const submitHandler = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)

        fetch(imgBbApi, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const imageURL = result.data.url;
                data.image = imageURL
                // console.log(data);
                fetch("https://pics-now-server-side.vercel.app/addService", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('furnitureBea-token')}`
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            setError("")
                            toast.success(data.message)
                        } else {
                            toast.error(data.message)
                            setError(data.message)
                        }
                    })
            })

        resetField("title")
        resetField("body")
        resetField("price")
        resetField("image")
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col mx-4">
                <h3 className='text-center text-3xl mb-8 font-semibold border-b-2 border-primary py-2 text-secondary'>Service add to Database</h3>
                <div className="card flex-shrink-0 w-full md:1/2 mx-auto shadow-2xl bg-base-100 ">
                    <div className='text-center text-red-500 pt-4'>
                        <p>{error}</p>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)} className="card-body">
                        <div className="form-control my-2">
                            <input {...register("title", { required: "Service title is must be required" })} type="text" name='title' placeholder="Service title..." className="input input-bordered" />
                            {
                                errors?.title &&
                                <p className='text-red-500'>{errors?.title?.message}</p>
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='h-full w-full'>
                                <textarea {...register("body", { required: "Service description is must be required" })} name="body" className=" textarea h-full w-full textarea-bordered" placeholder="Service Description..."></textarea>
                                {
                                    errors?.body &&
                                    <p className='text-red-500'>{errors?.body?.message}</p>
                                }
                            </div>
                            <div>
                                <div className="form-control my-2">
                                    <input {...register("price", { required: "Service price is must be required" })} type="number" name='price' placeholder="Service price $" className="input input-bordered" />
                                    {
                                        errors?.price &&
                                        <p className='text-red-500'>{errors?.price?.message}</p>
                                    }
                                </div>

                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text text-gray-500">Select Service Photo :</span>
                                    </label>
                                    <input {...register("image", { required: "Service photo is must be required" })} type="file" name='image' className="input" />
                                    {
                                        errors?.image &&
                                        <p className='text-red-500'>{errors?.image?.message}</p>
                                    }

                                </div>
                            </div>
                        </div>


                        <div className="form-control mt-6">
                            <input type="submit" value="Add Service" className='btn btn-sm bg-black text-white hover:text-primary hover:bg-secondary' />
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddService;