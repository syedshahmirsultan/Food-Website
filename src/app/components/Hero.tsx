import React from 'react';
import Image from 'next/image';
import NavBar from './NavBar';
import Link from 'next/link';

// Functional component named Hero
const Hero = () => {
    return (
        // Main section for the hero component
        <section>
            <div className='relative max-h-screen'>
                
                {/* Background image with absolute positioning */}
                <Image 
                    src={"/images/hero2.png"} 
                    alt="image of bg" 
                    width={670} 
                    height={140} 
                    className='top-0 right-0 absolute h-auto -z-10'
                />
                
                {/* Navbar container with bottom padding */}
                <div className="pb-40">
                    <NavBar/>
                </div>
                
                {/* Content container with flex properties and text alignment */}
                <div className="container flex flex-col mt-44 text-center space-y-4 md:text-start md:mt-8 lg:space-y-6">
                    
                    {/* Subtitle text */}
                    <p className='text-lg uppercase text-gray-800 font-semibold'>
                        Wide Options of Choice
                    </p>
                    
                    {/* Main headline */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        Delicious <span className="text-accent">Food</span>
                    </h2>
                    
                    {/* Description text */}
                    <p className="text-slate-900">
                        Delicious food color, aroma and taste. <br/> What are you waiting for?
                    </p>
                    
                    {/* View More button with link */}
                    <div>
                        <Link href="/">
                            <button className="bg-accent rounded-3xl py-[6px] px-6 text-white text-center font-semibold hover:scale-110 duration-300">
                                View More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Exporting the Hero component as the default export
export default Hero;
