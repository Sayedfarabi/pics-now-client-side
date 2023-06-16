import React from 'react';
import image1 from "../../../assets/images/logoes/logo-1.png";
import image2 from "../../../assets/images/logoes/logo-2.png";
import image3 from "../../../assets/images/logoes/logo-3.png";
import image4 from "../../../assets/images/logoes/logo-4.png";
import image5 from "../../../assets/images/logoes/logo-5.png";
import image6 from "../../../assets/images/logoes/logo-6.png";

const LogoSection = () => {
    return (
        <div className='grid grid-cols-3 md:grid-cols-6 gap-3 py-8 md:py-12'>
            <div className='mx-auto'>
                <img src={image1} alt="" />
            </div>
            <div className='mx-auto'>
                <img src={image2} alt="" />
            </div>
            <div className='mx-auto'>
                <img src={image3} alt="" />
            </div>
            <div className='mx-auto'>
                <img src={image4} alt="" />
            </div>
            <div className='mx-auto'>
                <img src={image5} alt="" />
            </div>
            <div className='mx-auto'>
                <img src={image6} alt="" />
            </div>
        </div>
    );
};

export default LogoSection;