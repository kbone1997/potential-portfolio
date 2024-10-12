"use client"
import React, { useEffect, useRef, useState } from 'react';
import TestimonialsComponents from './components/testimonialsComponents';
import image from "../assets/baa649092172e33f9b1e0e4eb8df495d.png"

function Testimonials() {
    const [isVisible, setIsVisible] = useState<boolean[]>([]); // Manage visibility for each component
    const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]); // Create refs for each testimonial component

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const updatedVisibility = entries.map((entry) => entry.isIntersecting);
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

    return (
        <div className='flex flex-col h-[1020px] pt-[10%]'>
            <div className='flex flex-col items-center justify-center w-full'>
                <p className='text-center text-6xl font-semibold tracking-wider'>Testimonials</p>
                <p className='font-[400] text-[21px] py-12 tracking-wide w-[63%] text-center'>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
                    Aliquet donec morbi convallis pretium.
                </p>
            </div>

            {/* Scrollable Testimonials Section */}
            <div className='flex w-full overflow-x-auto pt-24'>
                <div className='flex gap-12 justify-start'>
                    {[...Array(4)].map((_, index) => (
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
                            <TestimonialsComponents image={image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
