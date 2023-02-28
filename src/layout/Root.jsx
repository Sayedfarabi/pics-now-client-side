import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

export const DataContext = createContext()

const Root = () => {
    const data = useLoaderData()
    const services = data.data?.services?.data;
    const reviews = data.data?.reviews?.data;

    const databaseData = {
        services,
        reviews
    }

    return (
        <>
            <DataContext.Provider value={databaseData}>
                <Navbar></Navbar>
                <div style={{ minHeight: "90vh" }}>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </DataContext.Provider>
        </>
    );
};

export default Root;