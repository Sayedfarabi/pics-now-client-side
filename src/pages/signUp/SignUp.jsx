import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
// import { useImage } from '../../custom-hook/customHook';

const SignUp = () => {
    const { createUser, updateUser, loading, user } = useContext(AuthContext);
    const [error, setError] = useState();
    const { register, handleSubmit, formState: { errors }, resetField } = useForm();
    const imgBbKey = process.env.REACT_APP_imageBb_api_key;
    const imgBbApi = `https://api.imgbb.com/1/upload?key=${imgBbKey}`;
    const navigate = useNavigate();


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
                const imageUrl = result?.data?.url;
                data.image = imageUrl;
                const { name, email, password, image } = data;
                const userInfo = {
                    displayName: name,
                    photoURL: imageUrl
                }
                const userData = {
                    name,
                    email,
                    image
                }
                createUser(email, password)
                    .then(result => {
                        setError("")
                        toast.success("user create successful")
                        updateUser(userInfo)
                            .then(result => {
                                setError("")
                                navigate("/")
                                fetch("http://localhost:5000/addUser", {
                                    method: "POST",
                                    headers: {
                                        "content-type": "application/json",
                                    },
                                    body: JSON.stringify(userData)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.success) {
                                            const userEmail = {
                                                email
                                            }
                                            fetch("http://localhost:5000/getToken", {
                                                method: "POST",
                                                headers: {
                                                    "content-type": "application/json",
                                                },
                                                body: JSON.stringify(userEmail)
                                            })
                                                .then(res => res.json())
                                                .then(data => {

                                                    if (data?.success) {
                                                        localStorage.setItem("picsNow", data?.token)

                                                    } else {
                                                        toast.error(data?.message)
                                                    }
                                                })
                                        } else {
                                            toast.error(data?.message)
                                        }
                                    })
                            })
                            .catch(error => {
                                setError(error?.message)
                                toast.error(error?.message)
                            })
                    })
                    .catch(error => {
                        setError(error?.message)
                        toast.error(error?.message)
                    })
            })


        resetField("name")
        resetField("email")
        resetField("password")
        resetField("image")
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h3 className='text-center text-3xl mb-8 font-semibold border-b-2 border-primary py-2 text-secondary'>Sign Up Now</h3>
                <div className="card flex-shrink-0 w-80 md:w-96  shadow-2xl bg-base-100">
                    <div className='text-center text-red-500 pt-4'>
                        <p>{error}</p>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name :</span>
                            </label>
                            <input {...register("name", { required: "User name is must be required" })} type="text" name='name' placeholder="Type your name" className="input input-bordered" required />
                            {
                                errors?.name &&
                                <p className='text-red-500'>{errors?.name?.message}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email :</span>
                            </label>
                            <input {...register("email", { required: "Email address is must be required" })} type="email" name='email' placeholder="Type your email" className="input input-bordered" required />
                            {
                                errors?.email &&
                                <p className='text-red-500'>{errors?.email?.message}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password :</span>
                            </label>
                            <input {...register("password", { required: "Password is must be required" })} type="password" name='password' placeholder="Type your new password" className="input input-bordered" required />
                            {
                                errors?.password &&
                                <p className='text-red-500'>{errors?.password?.message}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Photo :</span>
                            </label>
                            <input {...register("image", { required: "Profile photo is must be required" })} type="file" name='image' className="input" required />
                            {
                                errors?.image &&
                                <p className='text-red-500'>{errors?.image?.message}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className='btn btn-sm bg-black text-white hover:text-primary hover:bg-secondary' />
                        </div>
                    </form>
                    <div className="mb-6 text-center">
                        <p>Have your an account? Please <span className='underline text-blue-500'><Link to={"/signIn"}>Sign in</Link></span></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SignUp;