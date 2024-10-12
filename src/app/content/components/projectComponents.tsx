import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectComponentsProps {
    image: StaticImageData;
}

function ProjectComponents({ image }: ProjectComponentsProps) {
    return (
        <div className='relative flex w-[445px] h-[490px] bg-skin rounded-[12px] overflow-hidden'>
            <div className='absolute w-3/5 top-[100px] left-[40px] z-10 shadow-depth'>
                <Image
                    className="dark:text-white"
                    src={image}
                    alt="Image 1"
                />
            </div>
            <div className='absolute w-3/5 left-[140px] bottom-[-145px] z-0'>
                <Image
                    className="dark:text-white"
                    src={image}
                    alt="Image 2"
                />
            </div>
        </div>
    );
}

export default ProjectComponents;
