"use client"
import React from 'react'
import ProjectComponents from './components/projectComponents'
import image1 from "../assets/466e1911ebe5383b65f5e9a7095f7e2c.png"
import image2 from "../assets/c7e4761db8fcbee96701dabc95083a4d.png"
import image3 from "../assets/af2fb38ce2fa59072d26b09da15537ed.png"

function Projects() {
    return (
        <div className='flex flex-col h-[1020px] mx-[12%] pt-[5%]'>
            <div className='flex flex-col items-center justify-center w-full'>
                <p className='text-center text-6xl font-semibold tracking-wider'>My Projects</p>
                <p className='font-[400] text-[21px] py-12 tracking-wide w-2/3 text-center'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
            </div>
            <div className='flex flex-row w-full justify-center gap-4'>
                <div className='bg-offwhite hover:bg-primary hover:text-white text-black text-[24px] font-[400] px-[20px] py-[10px] border-border border-[0.4px] rounded-[12px]'>
                    All
                </div>
                <div className='bg-offwhite hover:bg-primary hover:text-white text-black text-[24px] font-[400] px-[20px] py-[10px] border-border border-[0.4px] rounded-[12px]'>
                    UI/UX
                </div>
                <div className='bg-offwhite hover:bg-primary hover:text-white text-black text-[24px] font-[400] px-[20px] py-[10px] border-border border-[0.4px] rounded-[12px]'>
                    Web Design
                </div>
                <div className='bg-offwhite hover:bg-primary hover:text-white text-black text-[24px] font-[400] px-[20px] py-[10px] border-border border-[0.4px] rounded-[12px]'>
                    App Design
                </div>
                <div className='bg-offwhite hover:bg-primary hover:text-white text-black text-[24px] font-[400] px-[20px] py-[10px] border-border border-[0.4px] rounded-[12px]'>
                    Graphic Design
                </div>
            </div>
            <div className='flex flex-row gap-12 pt-24'>
                <ProjectComponents image={image1} />
                <ProjectComponents image={image2} />
                <ProjectComponents image={image3} />
            </div>
            <div className='flex w-full gap-8'>
                <div className='flex flex-col w-1/3 mt-10 gap-4'>
                    <p className='text-primary text-[19px] font-normal tracking-wide'>Web Design</p>
                    <p className='font-[700] text-[24px]'>AirCalling Landing Page Design</p>
                </div>
                <div className='flex flex-col w-1/3 mt-10 gap-4'>
                    <p className='text-primary text-[19px] font-normal tracking-wide'>Web Design</p>
                    <p className='font-[700] text-[24px]'>Business Landing Page Design</p>
                </div>
                <div className='flex flex-col w-1/3 mt-10 gap-4'>
                    <p className='text-primary text-[19px] font-normal tracking-wide'>Web Design</p>
                    <p className='font-[700] text-[24px]'>Ecom Web Page Design</p>
                </div>
            </div>
        </div>
    )
}

export default Projects