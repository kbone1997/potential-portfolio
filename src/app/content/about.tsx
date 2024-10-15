"use client"
import React from 'react';
import Image from 'next/image';
import test from "../assets/Background copy 1.png"
import test2 from "../assets/Background copy 2.png"

function About() {
  return (
    <div className='flex h-[80vh] mx-[12%] pt-[5%]'>
      <div className='w-5/12 flex justify-center items-center'>
        <div className='absolute w-[374px] h-[83px] bg-mask z-20 mb-[500px]'></div>
        <Image
          className='absolute  w-[653px] h-[407px] bottom-[-563px] overflow-visible z-10'
          src={test2}
          alt={''}
          width={681}
          height={407}
        />
        <div className='relative w-[545px] h-[545px] bg-white rounded-full'>
          <Image
            className='absolute w-[545px] h-[545px] border-4 rounded-full '
            src={test}
            alt={''}
            width={545}
            height={545}
          />
        </div>
      </div>
      <div className='w-7/12 pl-[5%]'>
        <p className='font-[600] text-6xl'>About Me</p>
        <p className='font-[400] text-[21px] py-6 text-justify tracking-wide'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <div>
          <p className='font-[600] text-[24px] py-2 text-justify tracking-wide'>UX</p>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <div className="ml-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              80%
            </div>
          </div>
        </div>

        {/* Website Design */}
        <div>
          <p className='font-[600] text-[24px] py-2 text-justify tracking-wide'>Website Design</p>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <div className="ml-4 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
              70%
            </div>
          </div>
        </div>

        {/* App Design */}
        <div>
          <p className='font-[600] text-[24px] py-2 text-justify tracking-wide'>App Design</p>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="ml-4 w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center">
              85%
            </div>
          </div>
        </div>

        {/* Graphic Design */}
        <div>
          <p className='font-[600] text-[24px] py-2 text-justify tracking-wide'>Graphic Design</p>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
            <div className="ml-4 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center">
              90%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
