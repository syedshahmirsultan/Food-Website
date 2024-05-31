import React from 'react';
import Image from 'next/image';

// Define the props type for the ServiceCard component
interface propsType {
    img: string,
    title: string,
    desc: string
}

// Functional component named ServiceCard
const ServiceCard = ({ img, title, desc }: propsType) => {
    return (
        // Container for the service card
        <div>
            <div className='space-y-3 text-center'>
                {/* Image of the service */}
                <Image src={img} width={70} height={70} alt={title} className="mx-auto"/>
                
                {/* Title of the service */}
                <div className="uppercase"> 
                    {title}
                    {/* Decorative dots */}
                    <div className='flex gap-2 w-fit mx-auto mt-2'>
                        <div className="bg-accent w-[7px] h-[7px] rounded-full"/>
                        <div className="bg-accent w-[7px] h-[7px] rounded-full"/>
                        <div className="bg-accent w-[7px] h-[7px] rounded-full"/>
                    </div>
                </div>
                
                {/* Description of the service */}
                <p className="text-[14px] text-slate-700"> 
                    {desc}
                </p>
            </div>
        </div>
    );
}

// Exporting the ServiceCard component as the default export
export default ServiceCard;
