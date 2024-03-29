import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../assets/logo/logo.png';
import toast from 'react-hot-toast';
import { DataContext } from '../Root';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { users } = useContext(DataContext)
    const dbUser = users.find(dbUser => dbUser?.email === user?.email);

    // console.log(dbUser);


    const signOut = () => {
        logOut()
            .then(result => {
                toast.success("user already sign out")
            })
            .catch(error => {
                toast.error(error?.message)
            })
    }

    return (
        <div className="navbar bg-slate-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='mx-2 rounded-md font-semibold hover:text-primary'>
                            <Link to={"/home"}>Home</Link>
                        </li>

                        <li className='mx-2 rounded-md font-semibold hover:text-primary'>
                            <Link to={"/services"}>Services</Link>
                        </li>
                        <li className='mx-2 rounded-md font-semibold hover:text-primary'>
                            <Link to={"/my-reviews"}>Your Reviews</Link>
                        </li>
                        {
                            (dbUser?.userRole === "admin") &&
                            <li className='mx-2 rounded-md font-semibold hover:text-primary'>
                                <Link to={"/add-service"}>Add Service</Link>
                            </li>
                        }
                        <li className='mx-2 rounded-md font-semibold hover:text-primary'>
                            <Link to={"/blog"}>Blog</Link>
                        </li>

                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">
                    <div className='flex justify-center items-center'>
                        <div className='mx-2 hidden lg:block'>
                            <img src={logo} alt="Logo" className='w-12 h-6' />
                        </div>
                        <div>
                            <p className='text-secondary'>Pics<span className='text-primary'>Now</span></p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='mx-2 rounded-md font-semibold hover:text-primary'>
                        <Link to={"/home"}>Home</Link>
                    </li>

                    <li className='mx-2 rounded-md font-semibold hover:text-primary'>
                        <Link to={"/services"}>Services</Link>
                    </li>
                    <li className='mx-2 rounded-md font-semibold hover:text-primary'>
                        <Link to={"/my-reviews"}>Your Reviews</Link>
                    </li>
                    {
                        (dbUser?.userRole === "admin") &&
                        <li className='mx-2 rounded-md font-semibold hover:text-primary'>
                            <Link to={"/add-service"}>Add Service</Link>
                        </li>
                    }
                    <li className='mx-2 rounded-md font-semibold hover:text-primary'>
                        <Link to={"/blog"}>Blog</Link>
                    </li>

                </ul>
            </div>
            <div className='navbar-end flex items-center'>
                {
                    !(user?.uid) ?
                        <div>
                            <div>
                                <ul className="menu menu-horizontal px-1">
                                    <li className='mx-2 rounded-md font-semibold text-primary'>
                                        <Link to={"/signIn"}>Sign in</Link>
                                    </li>
                                    <li className='rounded-md font-semibold text-secondary'>
                                        <Link to={"/signUp"}>Sign up</Link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        :
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL
                                    } alt="profile photo" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <p className='mx-auto text-green-500'>{user?.displayName}</p>
                                </li>
                                <li>
                                    <Link to={"/"} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to={"/"}>Settings</Link></li>
                                <li>
                                    <button onClick={signOut} className='btn btn-black btn-sm w-full text-white hover:text-primary my-4'>
                                        Sign out
                                    </button>
                                </li>
                            </ul>
                        </div>
                }
            </div>

        </div>
    );
};

export default Navbar;