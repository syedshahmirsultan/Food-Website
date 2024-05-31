import React from 'react';
import Dash from './Dash';
import Image from "next/image";
import MenuCard from './MenuCard';

// Data for menu items
const menu_data = [
    {
        img: "/images/cake.avif",
        title: "Delicious Cake",
        desc: "2x tuna sahini, 1x noodles",
        price: "$29.50"
    },
    {
        img: "/images/pizza.jpg",
        title: "Italian Pizza",
        desc: "2x tuna sahini, 1x noodles",
        price: "$29.50"
    },
    // Additional items with same details for demonstration purposes
    {
        img: "/images/pizza.jpg",
        title: "Italian Pizza",
        desc: "2x tuna sahini, 1x noodles",
        price: "$29.50"
    },
    {
        img: "/images/pizza.jpg",
        title: "Italian Pizza",
        desc: "2x tuna sahini, 1x noodles",
        price: "$29.50"
    },
    {
        img: "/images/pizza.jpg",
        title: "Italian Pizza",
        desc: "2x tuna sahini, 1x noodles",
        price: "$29.50"
    },
    {
        img: "/images/pizza.jpg",
        title: "Italian Pizza",
        desc: "2x tuna sahini, 1x noodles",
        price: "$29.50"
    },
    {
        img: "/images/pizza.jpg",
        title: "Italian Pizza",
        desc: "2x tuna sahini, 1x noodles",
        price: "$29.50"
    },
    {
        img: "/images/pizza.jpg",
        title: "Italian Pizza",
        desc: "2x tuna sahini, 1x noodles",
        price: "$29.50"
    }
];

// Functional component named Menu
const Menu = () => {
    return (
        // Main container for the menu section with padding on top
        <div className='container pt-40'>
            
            {/* Header section with title and description */}
            <div className="space-y-4 mx-auto text-center w-fit">
                <h2 className="text-4xl md:text-6xl font-bold">
                    Our <span className="text-accent">Menu</span>
                </h2>
                <p className="text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='w-fit mx-auto'>
                    <Dash/>
                </div>
            </div>
            
            {/* Menu categories */}
            <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
                <li className="bg-accent text-white p-1">Appetizers</li>
                <li>Breakfast</li>
                <li>Salads</li>
                <li>Meat & Fish</li>
                <li>Soup</li>
                <li>Dessert</li>
                <li>Drinks</li>
            </ul>

            {/* Menu items section with image and menu cards */}
            <div className="grid md:grid-cols-[35%,1fr] gap-10 pt-10">
                <div className="w-fit mx-auto">
                    <Image 
                        className="w-100% max-w-[370px] h-auto" 
                        src="/images/menu_left.png" 
                        width={450} 
                        height={450} 
                        alt="dish"
                    />
                </div>

                <div className="grid sm:grid-cols-2 w-fit mx-auto gap-4">
                    {
                        menu_data.map((item, index) => {
                            return (
                                <MenuCard 
                                    key={index} 
                                    img={item.img} 
                                    title={item.title} 
                                    desc={item.desc} 
                                    price={item.price}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

// Exporting the Menu component as the default export
export default Menu;
