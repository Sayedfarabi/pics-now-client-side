import React from 'react';

const ServiceDetailsCard = () => {
    return (
        <div className="card w-full mx-auto p-4 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div>
                        <h2 className="text-xl md:text-2xl text-primary">Wild Photography</h2>
                    </div>
                    <div>
                        <h2 className='text-sm md:text-xl font-semibold'> Price : <span className='text-yellow-400'>$</span><span className='text-secondary'>500</span></h2>
                    </div>
                </div>
                <div className='my-4 text-md md:text-base md:my-8 text-gray-500'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt perspiciatis pariatur earum ullam qui sit, esse ratione aliquam molestiae, porro aut placeat. Dolor vel odio voluptas inventore maxime corporis, voluptates et, officia aliquid possimus neque esse! Iusto quae ex a, officiis consequatur impedit non minima distinctio fugit ipsam perspiciatis rerum nostrum assumenda saepe facere inventore sint aperiam consequuntur nam! Saepe praesentium unde quos amet assumenda, ea laudantium maxime error architecto commodi minus obcaecati qui eum nisi veritatis rem vitae quibusdam similique maiores quia quam magnam. Praesentium laboriosam non qui odio? Beatae ipsam harum quidem ducimus illo iusto, assumenda pariatur ullam?</p>
                </div>
            </div>
            <figure>
                <img className='w-3/4 md:w-2/4 rounded-2xl hover:border-2 hover:border-secondary hover:cursor-pointer' src="https://www.shutterstock.com/image-photo/photographer-take-pictures-snapshot-camera-260nw-2080391959.jpg" alt="Shoes" />
            </figure>
        </div>
    );
};

export default ServiceDetailsCard;