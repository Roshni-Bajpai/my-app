"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Image1 from '../public/Image1.jpg';
import Image2 from '../public/Image2.jpg';
import Image3 from '../public/Image3.jpg';
import Image4 from '../public/Image4.jpg';
import Image5 from '../public/Image5.jpg';
import Image6 from '../public/Image6.jpg';

const images = [Image1, Image2, Image3, Image4, Image5, Image6];
const imageWidth = 700;
const imageHeight = 500;
const Page = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className='px-40 h-20'>
      <div className='relative' style={{ width: `${imageWidth}px`, height: `${imageHeight}px`, overflow: 'hidden' }}>
        <Image src={images[currentImage]} alt={`Image ${currentImage + 1}`} width={imageWidth}
          height={imageHeight} className='m-10 rounded inline-block' />
        <button onClick={prevImage} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded'>
          Previous
        </button>
        <button onClick={nextImage} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;






