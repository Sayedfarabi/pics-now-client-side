import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignIn = () => {
    const { signIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
    const [error, setError] = useState();
    const { register, handleSubmit, formState: { errors }, resetField } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const submitHandler = data => {
        // console.log(data);
        const email = data.email;
        const password = data.password;
        signIn(email, password)
            .then(result => {
                setError("")
                navigate(from)
                toast.success("sign in successful")
                const userEmail = {
                    email: email
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
            })
            .catch(error => {
                setError(error?.message)
                toast.error(error?.message)
            })

        resetField("email")
        resetField("password")
    }

    const googleHandle = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result);
                setError("")
                navigate(from)
                toast.success("sign in with google successful")
                const { displayName, email, photoURL } = result?.user;
                const userData = {
                    name: displayName,
                    email: email,
                    image: photoURL
                }
                console.log(userData);

                fetch("http://localhost:5000/addUser", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            const userEmail = {
                                email: userData.email
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
                        }

                    })
            })
            .catch(error => {
                setError(error?.message)
                toast.error(error?.message)
            })
    }

    const gitHubHandle = () => {
        signInWithGitHub()
            .then(result => {
                setError("")
                navigate(from)
                toast.success("sign in with gitHub successfully")
            })
            .catch(error => {
                setError(error?.message)
                toast.error(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h3 className='text-center text-3xl mb-8 font-semibold border-b-2 border-secondary pb-2 text-primary'>Sign In Now</h3>
                <div className="card flex-shrink-0 w-80 md:w-96 shadow-2xl bg-base-100 pt-8">
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid h-full card rounded-box place-items-center">
                            <div className='text-center text-red-500 pt-4'>
                                <p>{error}</p>
                            </div>
                            <form onSubmit={handleSubmit(submitHandler)} className="card-body">
                                <div className="form-control">

                                    <input {...register("email", { required: "Email address is must be required" })} type="text" name='email' placeholder="email" className="input input-bordered" required />
                                    {
                                        errors?.email &&
                                        <p className='text-red-500'>{errors?.email?.message}</p>
                                    }
                                </div>
                                <div className="form-control">

                                    <input {...register("password", { required: "Password is must be required" })} type="text" name='password' placeholder="password" className="input input-bordered" required />
                                    {
                                        errors?.password &&
                                        <p className='text-red-500'>{errors?.password?.message}</p>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign in" className='btn btn-sm bg-black text-white hover:text-primary hover:bg-secondary' />
                                </div>
                                <div className="form-control mt-6 text-center">
                                    <p>Haven't your an account? Please <span className='underline text-blue-500'><Link to={"/signUp"}>Sign up</Link></span></p>
                                </div>
                            </form>
                        </div>
                        <div className="divider">OR</div>
                        <div className="grid h-full py-4 card rounded-box place-items-center ">
                            <button onClick={googleHandle} className='btn btn-sm btn-outline border-primary hover:bg-secondary hover:text-primary my-2'>sign in with google</button>
                            <button onClick={gitHubHandle} className='btn btn-sm btn-outline border-secondary hover:bg-secondary hover:text-primary my-2'>sign in with GitHub</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;