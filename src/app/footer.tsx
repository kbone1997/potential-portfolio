import React from 'react'
import Image from 'next/image';
import logo from "./assets/Subtract.svg"
import facebookLight from "./assets/Facebook - Negative.svg"
import instagramLight from "./assets/Instagram - Negative.svg"
import twitterLight from "./assets/Twitter - Negative.svg"
import linkedinLight from "./assets/LinkedIn - Negative.svg"
import facebook from "./assets/Facebook.svg"
import instagram from "./assets/Instagram.svg"
import twitter from "./assets/Twitter.svg"
import linkedin from "./assets/LinkedIn.svg"

function Footer() {
    return (
        <div className='flex flex-col h-[50vh] mx-[12%] pt-[5%]'>
            <div className="flex justify-center items-center gap-4">
                <Image
                    priority
                    src={logo}
                    alt="Follow us on Twitter"
                />
                <p className="font-montserrat text-[48px] font-[700] text-darkBg dark:text-logotext">M<span className="font-[400] text-[48px]">umair</span></p>
            </div>
            <div className='flex items-center justify-center pt-[60px] gap-10'>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>Home</p>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>About Me</p>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>Services</p>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>Projects</p>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>Testimonials</p>
                <p className='font-[400] text-[21px] tracking-wide text-black dark:text-white'>Contact</p>
            </div>

            {
                localStorage.getItem("theme") !== "dark" ? (
                    <div className='flex items-center justify-center pt-[90px] gap-6'>
                        <Image
                            priority
                            src={facebookLight}
                            alt="Follow us on Twitter"
                        />
                        <Image
                            priority
                            src={twitterLight}
                            alt="Follow us on Twitter"
                        />
                        <Image
                            priority
                            src={instagramLight}
                            alt="Follow us on Twitter"
                        />
                        <Image
                            priority
                            src={linkedinLight}
                            alt="Follow us on Twitter"
                        />
                    </div>
                ) : (
                    <div className='flex items-center justify-center pt-[90px] gap-6'>
                        <Image
                            priority
                            src={facebook}
                            alt="Follow us on Twitter"
                        />
                        <Image
                            priority
                            src={twitter}
                            alt="Follow us on Twitter"
                        />
                        <Image
                            priority
                            src={instagram}
                            alt="Follow us on Twitter"
                        />
                        <Image
                            priority
                            src={linkedin}
                            alt="Follow us on Twitter"
                        />
                    </div>
                )
            }
        </div>
    )
}

export default Footer