import React from 'react';

export const VideoBackground = () => {
  return (
    <video autoPlay muted loop className="w-full h-[200px] sm:h-fit opacity-70">
      <source
        src="/videos/skepe.mp4"
        type="video/mp4"
      />
    </video>
  );
};
