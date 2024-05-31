import React from 'react';
import Dash from './Dash';
import ServiceCard from './ServiceCard';

// Data for service items
const services_data = [
    {
        img: "/images/services__1.png",
        title: "Professional Kitchen",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        img: "/images/services__2.png",
        title: "Delivery",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        img: "/images/services__3.png",
        title: "Cold Drink",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        img: "/images/services__4.png",
        title: "Free Wifi",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

// Functional component named Services
const Services = () => {
    return (
        // Main container for services section with padding on top
        <div className='container pt-40'>
            <div className="space-y-4 mx-auto text-center w-fit">
                {/* Title and description */}
                <h2 className="text-4xl md:text-6xl font-bold">
                    Choose Best <span className="text-accent">Service</span>
                </h2>
                <p className="text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {/* Divider */}
                <div className="w-fit mx-auto">
                    <Dash/>
                </div>
            </div>
            {/* Grid layout for service cards */}
            <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
                {/* Mapping through service data to render service cards */}
                {services_data.map((item, index) => {
                    return (
                        <ServiceCard key={index} img={item.img} title={item.title} desc={item.desc} />
                    )
                })} 
            </div>
        </div>
    );
}

export default Services;
