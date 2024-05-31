import Link from 'next/link';
import React from 'react';
import { BsInstagram, BsLinkedin, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

// Functional component named Footer
const Footer = () => {
    return (
        // Main container with padding on top
        <div className='container pt-40'>
            
            {/* Grid layout for the footer content */}
            <div className="grid md:grid-cols-3 gap-16 text-center">
                
                {/* About Us section */}
                <div className='space-y-4'>
                    <h2 className="text-xl font-bold">About Us</h2>
                    <p className="leading-[1.8]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                
                {/* The Restaurant section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">The Restaurant</h2>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Chefs</li>
                        <li>Events</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                
                {/* Social media links */}
                <div>
                    <div className="flex gap-8 text-accent text-2xl pt-16 mb-4">
                        <Link href="https://github.com/syedshahmirsultan"><FaFacebookF/></Link>
                        <Link href="https://www.linkedin.com/in/syedshahmirsultan/"><BsYoutube/></Link>
                        <Link href="https://github.com/syedshahmirsultan"><BsPinterest/></Link>
                        <Link href="https://www.linkedin.com/in/syedshahmirsultan/"><BsLinkedin/></Link>
                        <Link href="https://github.com/syedshahmirsultan"><BsTwitter/></Link>
                        <Link href="https://www.linkedin.com/in/syedshahmirsultan/"><BsInstagram/></Link>      
                    </div>
                </div>
            </div>
            
            {/* Footer copyright text */}
            <div>
                <Link href="https://github.com/syedshahmirsultan">
                    <p className='text-slate-800 text-sm font-semibold pt-6 p-2 inline-block hover:text-black whitespace-nowrap lg:self-end'>
                        © All rights reserved @syedshahmirsultan
                    </p>
                </Link>
            </div>
        </div>
    );
}

// Exporting the Footer component as the default export
export default Footer;
