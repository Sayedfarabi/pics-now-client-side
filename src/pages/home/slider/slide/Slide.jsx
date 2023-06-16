import React from 'react';
import { Link } from 'react-router-dom';
import './slide.css';

const Slide = ({ data }) => {


    return (
        <div id={data?._id} className="carousel-item relative w-full">
            <div className='carousel-img w-full'>
                <img src={data?.img} alt="fashion-slider" className="w-full h-[500px] md:h-[650px]" />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2">
                <div className='text-white ml-4 '>
                    <p className='text-3xl md:text-6xl mb-3 md:mb-6'>Reasonable</p>
                    <p className='text-3xl md:text-6xl mb-3 md:mb-6'>Price for</p>
                    <p className='text-3xl md:text-6xl text-secondary mb-3 md:mb-6'>{data?.title?.serviceName}</p>
                    <p className='text-3xl md:text-5xl text-primary font-semibold'>Photography Service</p>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#${data?.previousSlide}`} className="btn btn-sm md:btn-md btn-circle mx-2 md:mx-4">❮</a>
                <a href={`#${data?.nextSlide}`} className="btn btn-sm md:btn-md btn-circle mx-2 md:mx-4">❯</a>
            </div>
        </div>
    );
};

export default Slide;