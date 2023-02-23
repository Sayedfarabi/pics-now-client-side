import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ minHeight: "90vh" }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;