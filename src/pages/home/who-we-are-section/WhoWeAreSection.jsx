import React from 'react';
import image from '../../../assets/images/who-we-are/image.png';

const WhoWeAreSection = () => {
    return (
        <div className='py-8 md:py-12'>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center mx-4 md:mx-8'>
                <div className='w-full md:w-1/2'
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    data-aos-delay="50"
                    data-aos-easing="ease-in-out">

                    <img src={image} alt="" className='w-full h-96 md:h-[600px]' />
                </div>
                <div className='w-full md:w-1/2 mb-8 md:mb-0'>
                    <div className='pl-0 md:pl-16'>
                        <h4 className='text-primary text-xl mb-4 md:mb-6'>WHO WE ARE</h4>
                        <h2 className='font-semibold text-5xl mb-4 md:mb-6'>Use the power of flight and freedom to capture your world</h2>
                        <p className='text-gray-500 mb-6 md:mb-8 text-lg'>
                            Maecenas fringilla pellentesque finibus fusce mi condimentum blandit donec felis ipsum. Hac auctor vivamus congue efficitur tellus nascetur rhoncus eget letius accumsan. Dictum et vulputate nisl primis nullam lorem etiam diam turpis suspendisse ad.
                        </p>

                        <div>
                            <button className='py-3 px-6 md:py-4 md:px-8 bg-primary border-2 border-primary text-white text-xl hover:bg-white hover:text-primary '>Discover More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAreSection;