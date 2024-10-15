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
        <p className='font-[600] text-6xl text-black dark:text-white'>About Me</p>
        <p className='font-[400] text-[21px] py-6 text-justify tracking-wide text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

        <div className='flex flex-col gap-4'>
          <div>
            <p className='font-[600] text-[24px] py-2 text-justify tracking-wide text-black dark:text-white'>UX</p>
            <div className="relative w-full">
              <div className="w-full bg-gray-200 rounded-full h-[12px]">
                <div className="bg-primary h-[12px] rounded-full" style={{ width: '93%' }}></div>
              </div>
              {/* Circle at the top of the progress bar */}
              <div
                className="absolute top-[-11px] left-[calc(93%-5px)] w-[32px] h-[32px] rounded-full border-[3px] border-primary bg-progressCircle flex items-center justify-center"
                style={{ transform: 'translateX(-50%)' }}
              >
              </div>
            </div>
          </div>

          <div>
            <p className='font-[600] text-[24px] py-2 text-justify tracking-wide text-black dark:text-white'>Website Design</p>
            <div className="relative w-full">
              <div className="w-full bg-gray-200 rounded-full h-[12px]">
                <div className="bg-primary h-[12px] rounded-full" style={{ width: '88%' }}></div>
              </div>
              {/* Circle at the top of the progress bar */}
              <div
                className="absolute top-[-11px] left-[calc(88%-5px)] w-[32px] h-[32px] rounded-full border-[3px] border-primary bg-progressCircle flex items-center justify-center"
                style={{ transform: 'translateX(-50%)' }}
              >
              </div>
            </div>
          </div>

          <div>
            <p className='font-[600] text-[24px] py-2 text-justify tracking-wide text-black dark:text-white'>App Design</p>
            <div className="relative w-full">
              <div className="w-full bg-gray-200 rounded-full h-[12px]">
                <div className="bg-primary h-[12px] rounded-full" style={{ width: '95%' }}></div>
              </div>
              {/* Circle at the top of the progress bar */}
              <div
                className="absolute top-[-11px] left-[calc(95%-5px)] w-[32px] h-[32px] rounded-full border-[3px] border-primary bg-progressCircle flex items-center justify-center"
                style={{ transform: 'translateX(-50%)' }}
              >
              </div>
            </div>
          </div>

          <div>
            <p className='font-[600] text-[24px] py-2 text-justify tracking-wide text-black dark:text-white'>Graphic Design</p>
            <div className="relative w-full">
              <div className="w-full bg-gray-200 rounded-full h-[12px]">
                <div className="bg-primary h-[12px] rounded-full" style={{ width: '92%' }}></div>
              </div>
              {/* Circle at the top of the progress bar */}
              <div
                className="absolute top-[-11px] left-[calc(92%-5px)] w-[32px] h-[32px] rounded-full border-[3px] border-primary bg-progressCircle flex items-center justify-center"
                style={{ transform: 'translateX(-50%)' }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
