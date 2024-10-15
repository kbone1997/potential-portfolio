"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "./assets/Subtract.svg";
import facebookLight from "./assets/Facebook - Negative.svg";
import instagramLight from "./assets/Instagram - Negative.svg";
import twitterLight from "./assets/Twitter - Negative.svg";
import linkedinLight from "./assets/LinkedIn - Negative.svg";
import facebook from "./assets/Facebook.svg";
import instagram from "./assets/Instagram.svg";
import twitter from "./assets/Twitter.svg";
import linkedin from "./assets/LinkedIn.svg";
import useThemeStore from './store';

function Footer() {
    const savedTheme = useThemeStore((state) => state.darkMode);

    return (
        <div className='flex flex-col h-[50vh] mx-[12%] pt-[5%]'>
            <div className="flex justify-center items-center gap-4">
                <Image
                    priority
                    src={logo}
                    alt="Logo"
                />
                <p className="font-montserrat text-[48px] font-[700] text-darkBg dark:text-logotext">
                    M<span className="font-[400] text-[48px]">umair</span>
                </p>
            </div>
            <div className='flex items-center justify-center pt-[60px] gap-10'>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>Home</p>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>About Me</p>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>Services</p>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>Projects</p>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>Testimonials</p>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>Contact</p>
            </div>

            <div className='flex items-center justify-center pt-[90px] gap-6'>
                {savedTheme ? (
                    <>
                        <Image src={facebook} alt="Facebook" />
                        <Image src={twitter} alt="Twitter" />
                        <Image src={instagram} alt="Instagram" />
                        <Image src={linkedin} alt="LinkedIn" />
                    </>
                ) : (
                    <>
                        <Image src={facebookLight} alt="Facebook Light" />
                        <Image src={twitterLight} alt="Twitter Light" />
                        <Image src={instagramLight} alt="Instagram Light" />
                        <Image src={linkedinLight} alt="LinkedIn Light" />
                    </>
                )}
            </div>
        </div>
    );
}

export default Footer;
