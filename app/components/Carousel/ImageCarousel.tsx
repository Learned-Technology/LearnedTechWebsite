'use client';
import { Carousel } from 'flowbite-react';

export const ImageCarousel = () => {
  const images = [
    '/images/pexels-joa70-12078533.jpg',
    '/images/pexels-luis-gomes-166706-546819.jpg',
    '/images/pexels-pixabay-209726.jpg',
    '/images/MobileDevelopment.png',
    '/images/pexels-divinetechygirl-1181271.jpg',
    '/images/pexels-fotios-photos-811587.jpg',
    '/images/pexels-ingo-51401.jpg',
    '/images/pexels-pixabay-356056.jpg',
    '/images/pexels-sergei-starostin-15862958-6636463.jpg',
    '/images/pexels-tima-miroshnichenko-5380664.jpg',
    '/images/pexels-tima-miroshnichenko-5380792.jpg',
  ];

  return (
    <div className="h-96 sm:h-96 xl:h-96 2xl:h-96 mt-20 sm:mt-40">
      <Carousel>
        {images.map((image, i) => (
          <div
            key={i}
            className="h-full bg-blue-site"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col h-full items-center justify-center text-white p-8">
              <p>LearnedTech Services</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
