"use client"
import React, { useEffect, useRef, useState } from 'react';
import TestimonialsComponents from './components/testimonialsComponents';
import image1 from "../assets/baa649092172e33f9b1e0e4eb8df495d.png"
import image2 from "../assets/3fa637cd1c7f4913b84b9f6c8137cb98.png"

function Testimonials() {
    const [isVisible, setIsVisible] = useState<boolean[]>([]); // Manage visibility for each component
    const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]); // Create refs for each testimonial component
    const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref for the scrollable container
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const images = [image1, image2, image1, image2]; // Array of images

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                //const updatedVisibility = entries.map((entry) => entry.isIntersecting);
                // Update visibility state for each testimonial
                setIsVisible((prevState) => {
                    const newVisibility = [...prevState];
                    entries.forEach((entry) => {
                        const currentIndex = testimonialRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (currentIndex !== -1) {
                            newVisibility[currentIndex] = entry.isIntersecting;
                        }
                    });
                    return newVisibility;
                });
            },
            {
                root: null, // Use the viewport as the root
                threshold: 1, // Trigger when 50% of the element is visible
            }
        );

        // Observe each testimonial component
        testimonialRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        // Cleanup the observer when the component unmounts
        return () => {
            testimonialRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const scrollToComponent = (index: number) => {
        if (testimonialRefs.current[index] && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: testimonialRefs.current[index]!.offsetLeft,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className='flex flex-col h-[1020px] pt-[10%]'>
            <div className='flex flex-col items-center justify-center w-full'>
                <p className='text-center text-6xl font-semibold tracking-wider text-black dark:text-white'>Testimonials</p>
                <p className='font-[400] text-[21px] py-12 tracking-wide w-[48%] text-center text-black dark:text-white'>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
                    Aliquet donec morbi convallis pretium.
                </p>
            </div>

            {/* Scrollable Testimonials Section */}
            <div className='flex w-full overflow-x-auto no-scrollbar no-sc pt-24' ref={scrollContainerRef}>
                <div className='flex gap-12 justify-start'>
                    {images.map((img, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                testimonialRefs.current[index] = el; // Assign ref without returning anything
                            }}
                            style={{
                                opacity: isVisible[index] ? 1 : 0.5, // Set opacity based on visibility
                                transition: 'opacity 0.3s ease-in-out', // Smooth transition for opacity changes
                            }}
                        >
                            <TestimonialsComponents image={img} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Navigation dots */}
            <div className="flex w-full h-[150px] justify-center items-center gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-[57px] h-[16px] ${index === selectedIndex ? "bg-primary" : "bg-offwhite2"}  rounded-full cursor-pointer`}
                        onClick={() => {
                            scrollToComponent(index)
                            setSelectedIndex(index)
                        }
                        }
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
