import React from 'react';
import fashion from '../../../assets/images/slide-images/fashion-slider.jpg';
import wild from '../../../assets/images/slide-images/wild-slider.jpg';
import journalism from '../../../assets/images/slide-images/journalism-slider.jpg';
import sports from '../../../assets/images/slide-images/sports-slider.jpg';
import wedding from '../../../assets/images/slide-images/wedding-slider.png';
import Slide from './slide/Slide';


const Slider = () => {

    const slideData = [
        {
            _id: "slide1",
            img: wedding,
            title: {
                serviceName: "Our Wedding",
            },
            description: "",
            previousSlide: "slide5",
            nextSlide: "slide2"
        },
        {
            _id: "slide2",
            img: fashion,
            title: {
                serviceName: "Our Fashion Show",
            },
            description: "",
            previousSlide: "slide1",
            nextSlide: "slide3"
        },
        {
            _id: "slide3",
            img: sports,
            title: {
                serviceName: "Our Sports",
            },
            description: "",
            previousSlide: "slide2",
            nextSlide: "slide4"
        },
        {
            _id: "slide4",
            img: wild,
            title: {
                serviceName: "Our Wild",
            },
            description: "",
            previousSlide: "slide3",
            nextSlide: "slide5"
        },
        {
            _id: "slide5",
            img: journalism,
            title: {
                serviceName: "Our Journalism",
            },
            description: "",
            previousSlide: "slide4",
            nextSlide: "slide1"
        },
    ]

    return (
        <div className="carousel w-full">

            {slideData &&
                slideData.map(data => {
                    return <Slide
                        key={data._id}
                        data={data}
                    >
                    </Slide>
                })}

        </div>
    );
};

export default Slider;