// components/NavBar.tsx
"use client"
import React from "react";
import Image from 'next/image';
import logo from "./assets/logo.svg"


function NavBar({ toggleTheme }: { toggleTheme: () => void }) {
    return (
        <nav className="bg-white dark:bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Image
                        priority
                        src={logo}
                        alt="Follow us on Twitter"
                    />
                </div>
                <button
                    onClick={toggleTheme}
                    className="mt-2 px-4 py-2 rounded bg-blue-500 text-white dark:bg-blue-300 dark:text-black"
                >
                    {localStorage.getItem("theme")}
                </button>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-gray-300 hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-gray-300 hover:text-white">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-300 hover:text-white">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-300 hover:text-white">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-300 hover:text-white">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-300 hover:text-white">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-300 hover:text-white">
                            Download CV
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
