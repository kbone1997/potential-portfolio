// components/NavBar.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import logo from "./assets/logo.svg"


function NavBar({ toggleTheme }: { toggleTheme: () => void }) {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        setTheme(storedTheme);
    }, [theme, setTheme]);

    return (
        <nav className=" p-4 mt-10 border-4">
            <div className="container mx-[8%] flex justify-between items-center">
                <div className="w-1/5">
                    <Image
                        className="dark:text-white"
                        priority
                        src={logo}
                        alt="Follow us on Twitter"
                    />
                </div>

                <ul className="flex w-4/5 justify-between items-center text-xl">
                    <li
                        onClick={toggleTheme}
                        className=" text-black dark:text-white"
                    >
                        <a className="text-black dark:text-white">
                            {theme}
                        </a>
                    </li>
                    <li>
                        <a href="/" className="text-black dark:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-black dark:text-white">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-black dark:text-white">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-black dark:text-white">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-black dark:text-white">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="text-black dark:text-white">
                            Contact
                        </a>
                    </li>
                    <li>
                        <button
                            onClick={toggleTheme}
                            className=" px-4 py-2 rounded bg-primary text-white"
                        >
                            Download CV
                        </button>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
