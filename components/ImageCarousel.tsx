"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

/* const imageSlider = [{
    id:1,
    image:'/phis3project.png',
},
{
    id:2,
    image:'/funishop.png',
},
{
    id:3,
    image:'/lcm.png',
},
{
    id:4,
    image:'/phis3project.png',
},
  
  // Add more images if you have them
]; */

const ImageCarousel = ({
  imageSlider,
  title
}: {
  imageSlider: any;
  title: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSlider.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageSlider.length - 1 : prevIndex - 1
    );
  };
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 4; i++) {
      visibleImages.push(imageSlider[(currentIndex + i) % imageSlider.length]);
    }
    return visibleImages;
  };


  return (
    <div className="relative w-full mt-20">
        
        <div className='relative flex md:-mb-8 -mb-10'>
            <div className='justify-start items-start'>
                <p className="md:tracking-wider mt-5 text-base md:text-2xl lg:text-2xl">
                    {title}
                </p>
            </div>
            <div className='justify-end items-end'>
                <button
                    onClick={nextImage}
                    className="absolute top-2 right-14  text-white p-2"
                >
                    &larr;
                </button>
                <button
                    onClick={prevImage}
                    className="absolute top-2 right-2  text-white p-2"
                    >
                    &rarr;
                </button>
            </div>
                
        </div>
    
        <div className="flex w-full space-x-5 mt-16 duration-1000 overflow-hidden">
        {getVisibleImages().map((image, id) => (
            <div
            key={id}
            className="md:w-1/4 w-2/4 h-64 flex-shrink-0"
            >
            <Link href={`/projects/${image.id}`}>
                <img src={image.image} alt={`Slide ${image.id}`} className="w-full md:h-40 h-40 md:object-fill object-cover cursor-pointer overflow-hidden" />
            </Link>
            
            </div>
        ))}
        </div> 
    </div>
  );
};

export default ImageCarousel;

