import React from 'react'
import ProjectComponents from './components/projectComponents'

function Projects() {
    return (
        <div className='flex flex-col h-[1020px] mx-[12%] pt-[5%]'>
            <div className='flex flex-col items-center justify-center w-full'>
                <p className='text-center text-6xl font-semibold tracking-wider'>My Projects</p>
                <p className='font-[400] text-[21px] py-12 tracking-wide w-3/5 text-center'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
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
            <div>
                <ProjectComponents />
            </div>
        </div>
    )
}

export default Projects