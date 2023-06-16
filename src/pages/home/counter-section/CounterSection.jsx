import React from 'react';
import Count from '../../../components/count/Count';

const CounterSection = () => {
    const counterData = [
        {
            _id: "count001",
            count: "14K+",
            title: "Happy Client"
        },
        {
            _id: "count002",
            count: "7K+",
            title: "Aerial programs"
        },
        {
            _id: "count001",
            count: "36K+",
            title: "Aerial Photography"
        },
        {
            _id: "count001",
            count: "10",
            title: "Years Experience"
        }
    ]

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 py-6 md:py-10'>
            {
                counterData?.map((data, idx) => {
                    return <Count
                        key={data._id}
                        data={data}
                        border={(counterData?.length) === (idx + 1) ? false : true}></Count>
                })
            }
        </div>
    );
};

export default CounterSection;