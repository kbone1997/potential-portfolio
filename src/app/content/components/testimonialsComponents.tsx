import React from 'react'
import Image, { StaticImageData } from 'next/image';



interface TestimonialsComponentsProps {
    image: StaticImageData; // Type for imported images in Next.js
}

function TestimonialsComponents({ image }: TestimonialsComponentsProps) {
    return (
        <div className='w-[1087px] h-[344px] bg-offwhite rounded-[14px] flex p-4'>
            <div className='flex w-[27%] items-center justify-center'>
                <div className='flex w-[235px] h-[235px] items-center justify-center overflow-hidden rounded-full'>
                    <Image
                        width={235}
                        height={235}
                        src={image}
                        alt="Image 1"
                    />
                </div>
            </div>
            <div className='relative flex flex-col w-[70%] h-full justify-center'>
                <p className='absolute mb-[185px] text-primary font-[700] text-[32px] '>“</p>
                <p className='font-normal text-[21px] tracking-wide p-4 text-offblack text-justify'>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                <p className='absolute text-primary font-[700] text-[32px] text-justify pl-[470px] mt-[70px]'>“</p>
                <p className='font-[500] text-black text-[24px] text-justify px-4'>Name</p>
                <p className='font-[400] text-black text-[19px] text-justify px-4'>CEO</p>

            </div>

        </div>
    )
}

export default TestimonialsComponents