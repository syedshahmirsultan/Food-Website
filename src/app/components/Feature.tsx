import React from 'react';
import Dash from './Dash';
import Image from 'next/image';

// Functional component named Feature
const Feature = () => {
    return (
        // Main section container with padding and text alignment classes
        <section className="container pt-56 text-center md:text-left">
            {/* Title section */}
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Our</h2>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mt-2'>
                Featured <span className="text-accent">Food</span>
            </h2>
            
            {/* Description paragraph */}
            <p className="text-slate-700 max-w-[550px] pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            {/* Horizontal dash component */}
            <Dash/>

            {/* Grid layout for featured food items */}
            <div className='grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10'>
                
                {/* First featured food item */}
                <div className='w-fit self-end mx-auto'>
                    {/* Image of the food item */}
                    <Image src="/images/grid__1.png" alt="Grid Image" width={350} height={600} className="w-100% max-w-[400px] sm:max-w-full h-auto shadow-2xl"/>

                    {/* Description of the food item */}
                    <div className='space-y-4'>
                        <Dash/>
                        <h2 className="font-medium text-xl">Shrimp Salad</h2>
                        <p className="text-slate-700 text-[14px] xl:text-[16px] p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* Second featured food item */}
                <div className='w-fit mx-auto'>
                    {/* Image of the food item */}
                    <Image src="/images/grid__2.png" alt="Grid Image" width={500} height={900} className="w-100% max-w-[400px] sm:max-w-full h-auto shadow-2xl"/>

                    {/* Description of the food item */}
                    <div className='space-y-4'>
                        <Dash/>
                        <h2 className="font-medium text-xl">Baked Apples</h2>
                        <p className="text-slate-700 text-[14px] xl:text-[16px] p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* Third featured food item */}
                <div className='w-fit self-end mx-auto'>
                    {/* Image of the food item */}
                    <Image src="/images/grid__3.png" alt="Grid Image" width={350} height={600} className="w-100% max-w-[400px] sm:max-w-full h-auto shadow-2xl"/>

                    {/* Description of the food item */}
                    <div className='space-y-4'>
                        <Dash/>
                        <h2 className="font-medium text-xl">Cherries Chicken</h2>
                        <p className="text-slate-700 text-[14px] xl:text-[16px] p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

// Exporting the Feature component as the default export
export default Feature;
