import React from 'react';
import fashion from '../../../assets/images/best-photography/fashion1.jpg';
import wild from '../../../assets/images/best-photography/wild.jpg';
import architectural from '../../../assets/images/best-photography/Architectural.jpg';
import wedding from '../../../assets/images/best-photography/wedding.jpg';

const Examples = () => {
    return (
        <div className=' mx-2 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-3 h-full'>
                <div className='md:col-span-2 flex md:flex-col justify-evenly items-center md:min-h-[600px] mx-4'>
                    <div>
                        <img src={wedding} alt="" className='w-40 md:w-80 h-40 md:h-64 rounded-md' />
                    </div>
                    <div>
                        <img src={architectural} alt="" className='w-40 md:w-80 h-40 md:h-64 rounded-md' />
                    </div>
                </div>
                <div className='text-center flex justify-center items-center'>
                    <div
                        data-aos="zoom-out"
                        data-aos-duration="1000"
                        data-aos-delay="50"
                        data-aos-once="false"
                    >
                        <h5 className='text-xl'>Our</h5>
                        <h4 className='text-2xl inline text-primary font-semibold'>NICE PHOTOGRAPHY</h4>
                        <h5 className='text-xl'>Examples</h5>
                    </div>
                </div>
                <div className='md:col-span-2 flex md:flex-col justify-evenly items-center md:min-h-[600px] mx-4'>
                    <div>
                        <img src={wild} alt="" className='w-40 md:w-80 h-40 md:h-64 rounded-md' />
                    </div>
                    <div>
                        <img src={fashion} alt="" className='w-40 md:w-80 h-40 md:h-64 rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Examples;