"use client"
import React from 'react'
import ServiceComponent from './components/serviceComponents'
import ui from "../assets/Group 1.svg"
import web from "../assets/Group 18.svg"
import app from "../assets/Layer_1.svg"
import graphic from "../assets/Group 2.svg"

function Services() {
  return (
    <div className='flex flex-col h-[80vh] mx-[12%] pt-[5%]'>
      <div className='flex flex-col items-center justify-center w-full'>
        <p className='text-center text-6xl font-semibold tracking-wider text-black dark:text-white'>Services</p>
        <p className='font-[400] text-[21px] py-12 tracking-wide w-3/5 text-center text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
      <div className='flex flex-row w-full gap-8'>
        <div className='w-1/4'>
          <ServiceComponent icon={ui} title={'UI/UX'} />
        </div>
        <div className='w-1/4'>
          <ServiceComponent icon={app} title={'Web Design'} />
        </div>
        <div className='w-1/4'>
          <ServiceComponent icon={web} title={'App Design'} />
        </div>
        <div className='w-1/4'>
          <ServiceComponent icon={graphic} title={'Graphic Design'} />
        </div>
      </div>
    </div>
  )
}

export default Services