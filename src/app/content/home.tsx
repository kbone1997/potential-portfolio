"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import test from "../assets/Layer 0 copy 3.png";
import test2 from "../assets/Layer 0 copy 4.png";
import facebookLight from "./../assets/Facebook - Negative.svg";
import instagramLight from "./../assets/Instagram - Negative.svg";
import twitterLight from "./../assets/Twitter - Negative.svg";
import linkedinLight from "./../assets/LinkedIn - Negative.svg";
import facebook from "./../assets/Facebook.svg";
import instagram from "./../assets/Instagram.svg";
import twitter from "./../assets/Twitter.svg";
import linkedin from "./../assets/LinkedIn.svg";
import useThemeStore from '../store';

function Home() {
    const savedTheme = useThemeStore((state) => state.darkMode);

    return (
        <div className="flex h-[100vh] mx-[12%] pt-[10%]">
            <div className="w-1/2">
                <p className="font-[600] text-2xl">Hi I am</p>
                <p className="font-[600] text-[32px] text-primary">Muhammad Umair</p>
                <p className="font-[700] text-8xl text-white">UI & UX</p>
                <p className="font-[700] text-8xl text-white text-right">Designer</p>
                <p className="font-[400] text-[21px] py-6 text-justify tracking-wide">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
                </p>
                <button className="px-16 py-2 rounded bg-primary text-white">
                    <p className="text-xl">Hire Me</p>
                </button>
            </div>
            <div>
                <div className="absolute w-[374px] h-[83px] bg-mask z-20 mt-[-50px] ml-[220px]"></div>
                <Image
                    className="absolute w-[526px] h-[352px] overflow-visible bottom-[358px] ml-[150px] z-10"
                    src={test2}
                    alt=""
                    width={485}
                    height={485}
                />
                <div className="relative ml-[161px] mt-[3px] w-[485px] h-[485px] bg-white rounded-full">
                    <Image
                        className="absolute w-[485px] h-[485px] border-4 rounded-full"
                        src={test}
                        alt=""
                        width={488}
                        height={484}
                    />
                </div>
                {/* Conditionally render icons based on darkMode */}
                <div className="flex items-center justify-center w-full pt-[20px] ml-[75px]">
                    <div className="flex items-center justify-center gap-6">
                        {savedTheme ? (
                            <>
                                <Image priority src={facebook} alt="Follow us on Facebook" />
                                <Image priority src={twitter} alt="Follow us on Twitter" />
                                <Image priority src={instagram} alt="Follow us on Instagram" />
                                <Image priority src={linkedin} alt="Follow us on LinkedIn" />
                            </>
                        ) : (
                            <>
                                <Image priority src={facebookLight} alt="Follow us on Facebook" />
                                <Image priority src={twitterLight} alt="Follow us on Twitter" />
                                <Image priority src={instagramLight} alt="Follow us on Instagram" />
                                <Image priority src={linkedinLight} alt="Follow us on LinkedIn" />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
