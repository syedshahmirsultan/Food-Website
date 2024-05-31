import React from 'react';
import Image from "next/image"

// Functional component named Survey
const Survey = () => {
    return (
        // Main container for the survey section with padding on top
        <div className='container pt-40'>
            {/* Grid layout for survey content */}
            <div className="grid lg:grid-cols-[50%,1fr] gap-20">
                {/* Image section */}
                <div>
                    {/* Image of the survey */}
                    <Image 
                        src="/images/survey.png" 
                        width={1000} 
                        height={600} 
                        alt="Survey Image" 
                        className="w-100% h-auto lg:w-auto lg:h-[90vh]" 
                    />
                </div>

                {/* Survey information section */}
                <div className="self-center text-center">
                    {/* Survey title */}
                    <h2 className="text-4xl md:text-5xl font-bold">Survey</h2>
                    <h2 className="text-4xl md:text-5xl font-bold pt-3">About our <span className="text-accent">Food</span></h2>

                    {/* Survey description */}
                    <br/>
                    <p className="text-slate-700 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Survey;
