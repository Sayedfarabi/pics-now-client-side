import React from 'react';

const Count = ({ data, border }) => {
    return (
        <div className={`text-center py-4 border-r-none ${border && "md:border-r border-gray-400"}`}>
            <h1 className='text-6xl font-bold text-primary'>{data?.count}</h1>
            <p className='text-lg text-gray-500'>{data?.title}</p>
        </div>
    );
};

export default Count;