import React from 'react';
import PriceCard from '../../../components/price-card/PriceCard';

const OurPriceSection = () => {

    const priceData = [
        {
            _id: "price0001",
            title: "Basic",
            body: "Velit ultrices habitasse nulla si felis duis condimentum",
            price: 49,
            selected: false
        },
        {
            _id: "price0002",
            title: "Premium",
            body: "Velit ultrices habitasse nulla si felis duis condimentum",
            price: 99,
            selected: true
        },
        {
            _id: "price0003",
            title: "Advance",
            body: "Velit ultrices habitasse nulla si felis duis condimentum",
            price: 149,
            selected: false
        }
    ]
    return (
        <div className='py-8 md:py-12 mx-4 md:mx-8'>
            <div className='mx-4 md:mx-8 flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10'>
                <div className='mb-6 md:mb-0 w-full md:w-1/2 mr-0 md:mr-12'>
                    <h4 className='text-xl text-primary mb-4 md:mb-6'>OUR PRICING</h4>
                    <h2 className='text-4xl font-semibold'>Delivering joy to the world, one drone at a time</h2>
                </div>
                <div className='mb-6 md:mb-0 w-full md:w-1/2'>
                    <p className='text-lg text-gray-500 mb-4 md:mb-6'>
                        Condimentum semper vulputate ad pellentesque facilisi nam maecenas efficitur eu elit ultricies. Est aptent turpis netus maecenas quis finibus gravida class pretium consectetuer primis.
                    </p>

                    <button className='py-3 px-6 md:py-4 md:px-8 bg-primary border-2 border-primary text-white text-xl hover:bg-white hover:text-primary '>Learn More</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3'>
                {
                    priceData?.map(data => {
                        return <PriceCard
                            key={data?._id}
                            data={data}>

                        </PriceCard>
                    })
                }
            </div>
        </div>
    );
};

export default OurPriceSection;