import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface ServiceComponentProps {
    icon: StaticImageData; // Type for imported images in Next.js
    title: string;
}

function ServiceComponent({ icon, title }: ServiceComponentProps) {
    return (
        <div className='flex flex-col w-full h-[340px] bg-offwhite rounded-[14px] px-[20px]'>
            <div className='w-full h-2/5 flex items-end'>
                <Image
                    priority
                    src={icon}
                    alt="Follow us on Twitter"
                />
            </div>
            <div className='h-3/5'>
                <div className='h-2/5 flex items-center'>
                    <p className='text-black font-[600] text-[32px] tracking-wide'>{title}
                    </p>
                </div>
                <div className='h-3/5 p-2'>
                    <p className='text-black text-[19px] font-[400] tracking-wide'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceComponent