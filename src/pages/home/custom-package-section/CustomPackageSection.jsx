import React from 'react';

const CustomPackageSection = () => {
    return (
        <div className='py-8 md:py-12 text-center'>
            <h2 className='text-4xl font-bold mb-4 md:mb-6'>Need custom package?</h2>
            <p className='mb-4 md:mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className='btn btn-sm rounded-none btn-outline border-primary hover:text-primary font-semibold hover:bg-black border-2'><span className='mx-2'>Contact Sales</span></button>
        </div>
    );
};

export default CustomPackageSection;