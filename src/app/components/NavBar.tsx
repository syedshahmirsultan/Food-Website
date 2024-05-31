import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMenu } from "react-icons/io5"

// Functional component named NavBar
const NavBar = () => {

    // Navigation links data
    const navigation = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "About"
        },
        {
            id: 3,
            name: "Food"
        },
        {
            id: 4,
            name: "Dish"
        },
        {
            id: 5,
            name: "Contact"
        }
    ];

    return (
        // Navigation container with padding and flex layout
        <nav className='container pt-10 flex justify-between'>
            {/* Logo */}
            <div>
                {/* Link to home */}
                <Link href="/">
                    <Image src={"/images/logo.png"} alt="logo" width={50} height={50} className='hover:scale-125 duration-300'/>
                </Link>
            </div>
            
            {/* Navigation links */}
            <div>
                {/* List of navigation links */}
                <ol className='hidden md:flex  space-x-6 font-semibold text-[16px] '>
                    {navigation.map((item) => (
                        <Link key={item.id} href="/">
                            <li className="cursor-pointer group relative overflow-hidden hover:font-bold">
                                {item.name}
                                {/* Underline effect on hover */}
                                <span className='w-full h-[3px] bg-white absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-0 group-hover:-translate-x-0 transition-transform duration-200'></span>
                            </li>
                        </Link>
                    ))}
                    {/* SignUp button */}
                    <div>
                        <Link href="/">
                            <button className='text-white bg-accent px-6 py-[6px] rounded-3xl text-sm right-10 hover:scale-110 duration-200'>SignUp</button>
                        </Link>
                    </div>
                </ol> 
                {/* Menu icon for mobile */}
                <IoMenu size={40} className='text-accent font-extrabold flex md:hidden cursor-pointer'/>
            </div> 
        </nav>
    );
}

export default NavBar;
