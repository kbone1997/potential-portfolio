"use client";
import React from "react";
import Image from 'next/image';
import logo from "./assets/Subtract.svg";

interface NavBarProps {
    toggleTheme: () => void; // Add the toggleTheme prop
}

const NavBar: React.FC<NavBarProps> = ({ toggleTheme }) => {
    return (
        <nav className="p-4 mt-10">
            <div className="container mx-[8%] flex items-center justify-center">
                <div className="w-1/4 flex justify-start items-center gap-4">
                    <Image
                        priority
                        src={logo}
                        alt="Follow us on Twitter"
                    />
                    <p className="font-montserrat text-[48px] font-[700] text-darkBg dark:text-logotext">M<span className="font-[400] text-[48px]">umair</span></p>
                </div>

                <ul className="flex w-3/4 justify-between items-center text-xl pl-[5%]">
                    <li><a href="/" className="text-black dark:text-white text-[21px] font-normal tracking-wide">Home</a></li>
                    <li><a href="/about" className="text-black dark:text-white text-[21px] font-normal tracking-wide">About Me</a></li>
                    <li><a href="/contact" className="text-black dark:text-white text-[21px] font-normal tracking-wide">Services</a></li>
                    <li><a href="/contact" className="text-black dark:text-white text-[21px] font-normal tracking-wide">Projects</a></li>
                    <li><a href="/contact" className="text-black dark:text-white text-[21px] font-normal tracking-wide">Testimonials</a></li>
                    <li><a href="/contact" className="text-black dark:text-white text-[21px] font-normal tracking-wide">Contact</a></li>
                    <li>
                        <button
                            onClick={toggleTheme} // Use the toggleTheme prop
                            className="px-6 py-3 rounded bg-primary text-white text-[21px] font-normal tracking-wide"
                        >
                            Change Theme
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
