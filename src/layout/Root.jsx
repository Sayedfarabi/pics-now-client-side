import React, { createContext } from 'react';
import { useQuery } from 'react-query';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

export const DataContext = createContext()

const Root = () => {
    const data = useLoaderData()
    const services = data.data?.services?.data;
    // const reviews = data.data?.reviews?.data;
    const users = data.data?.users?.data;

    const { data: reviewsData = [], isLoading, refetch: reviewRefetch } = useQuery({
        queryKey: ["/reviews"],
        queryFn: async () => {
            try {
                const res = await fetch("https://pics-now-server-side.vercel.app/reviews", {
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('picsNow')}`
                    }
                })
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error);
            }
        }
    })
    // console.log(reviews);

    const databaseData = {
        services,
        reviewsData,
        users,
        isLoading,
        reviewRefetch
    }

    // console.log(databaseData);

    return (
        <>
            <DataContext.Provider value={databaseData}>
                <Navbar></Navbar>
                <div className='bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100' style={{ minHeight: "90vh" }}>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </DataContext.Provider>
        </>
    );
};

export default Root;