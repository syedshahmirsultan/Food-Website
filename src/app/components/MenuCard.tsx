import React from 'react';
import Image from 'next/image';

// Define the props type for the MenuCard component
interface propsType {
    img: string,
    title: string,
    desc: string,
    price: string
}

// Functional component named MenuCard
const MenuCard = ({ img, title, desc, price }: propsType) => {
    return (
        // Container for the menu card with flex layout
        <div className="flex gap-3">
            
            {/* Image of the menu item */}
            <Image 
                className="w-25 h-25" 
                width={80} 
                height={80} 
                src={img} 
                alt={title}
            />
            
            {/* Text content for the menu item */}
            <div className='space-y-2'>
                
                {/* Title and description */}
                <div>
                    <h2>{title}</h2>
                    <p className="text-[14px] text-slate-700 pt-1">{desc}</p>
                </div>
                
                {/* Price of the menu item */}
                <p className="text-accent">{price}</p>
            </div>
        </div>
    );
}

// Exporting the MenuCard component as the default export
export default MenuCard;
