import React from 'react';

function Home() {
    return (
        <div className='flex border-4 h-[80vh] mx-[12%] pt-[10%]'>
            <div className='w-1/2 border-4 border-red-400 '>
                <p className='font-[600] text-2xl'>Hi I am</p>
                <p className='font-[600] text-[32px] text-primary'>Muhammad Umair</p>
                <p className='font-[700] text-8xl text-white border-4'>UI & UX</p>
                <p className='font-[700] text-8xl text-white text-right'>Designer</p>
                <p className='font-[400] text-[21px] py-6 text-justify tracking-wide'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <button
                    className=" px-16 py-2 rounded bg-primary text-white"
                >
                    <p className='text-xl'>Hire Me</p>
                </button>
            </div>
            <div className='w-1/2 border-4 border-red-400'>
                This is another testing
            </div>
        </div>
    );
}

export default Home;
