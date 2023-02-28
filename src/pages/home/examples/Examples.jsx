import React from 'react';

const Examples = () => {
    return (
        <div className=' mx-2 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-3 h-full'>
                <div className='md:col-span-2 flex md:flex-col justify-evenly items-center md:min-h-[600px] mx-4'>
                    <div>
                        <img src="https://assets.reedpopcdn.com/-1624546187638.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/-1624546187638.jpg" alt="" className='w-40 md:w-80 h-40 md:h-64 rounded-md' />
                    </div>
                    <div>
                        <img src="https://assets.reedpopcdn.com/-1624546187638.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/-1624546187638.jpg" alt="" className='w-40 md:w-80 h-40 md:h-64 rounded-md' />
                    </div>
                </div>
                <div className='text-center flex justify-center items-center'>
                    <div>
                        <h5 className='text-xl'>Our</h5>
                        <h4 className='text-2xl inline text-primary'>NICE PHOTOGRAPHY</h4>
                        <h5 className='text-xl'>Examples</h5>
                    </div>
                </div>
                <div className='md:col-span-2 flex md:flex-col justify-evenly items-center md:min-h-[600px] mx-4'>
                    <div>
                        <img src="https://assets.reedpopcdn.com/-1624546187638.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/-1624546187638.jpg" alt="" className='w-40 md:w-80 h-40 md:h-64 rounded-md' />
                    </div>
                    <div>
                        <img src="https://assets.reedpopcdn.com/-1624546187638.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/-1624546187638.jpg" alt="" className='w-40 md:w-80 h-40 md:h-64 rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Examples;