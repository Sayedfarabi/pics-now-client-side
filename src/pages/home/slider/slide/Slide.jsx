import React from 'react';
import { Link } from 'react-router-dom';
import './slide.css';

const Slide = ({ data }) => {


    return (
        <div id={data?._id} className="carousel-item relative w-full">
            <div className='carousel-img w-full'>
                <img src={data?.img} alt="fashion-slider" className="w-full max-h-[500px]" />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2">
                <div className='text-white ml-4 '>
                    <p className='text-5xl'>Reasonable</p>
                    <p className='text-5xl'>Price for</p>
                    <p className='text-5xl text-secondary'>{data?.title?.serviceName}</p>
                    <p className='text-5xl text-primary'>Photography Service</p>
                    {/* <div className='mx-auto w-full text-center my-8'>
                        <button className='btn btn-sm bg-secondary text-black hover:text-orange-500'>
                            <Link to="/#contact-me">Contact me</Link>
                        </button>
                    </div> */}
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#${data?.previousSlide}`} className="btn btn-circle mx-4">❮</a>
                <a href={`#${data?.nextSlide}`} className="btn btn-circle mx-4">❯</a>
            </div>
        </div>
    );
};

export default Slide;