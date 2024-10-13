import React from 'react'

function Contact() {
    return (
        <div className='flex flex-col h-[60vh] mx-[12%] pt-[5%]'>
            <div className='flex flex-col items-center justify-center w-full'>
                <p className='text-center text-[65px] font-semibold tracking-wider'>Lets Design Together</p>
                <p className='font-[400] text-[21px] py-12 tracking-wide w-3/5 text-center'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            </div>
            <div className='flex flex-row w-full gap-8 px-[100px] justify-center items-center'>
                <input placeholder='Enter Your Email' className='w-1/2 h-[75px] rounded-[14px] placeholder:text-placeholder placeholder:tracking-wide placeholder:text-[21px] placeholder:pl-[20px] bg-offwhite border-[1px] border-border2'></input>
                <button
                    className="px-9 py-5 rounded-[14px] bg-primary text-white font-[600] text-[24px] tracking-wide"
                >
                    Contact Me
                </button>
            </div>
        </div>
    )
}

export default Contact