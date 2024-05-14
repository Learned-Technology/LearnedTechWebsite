import React from 'react'
import { VideoBackground } from '../Video/VideoBackground'
import { CarouselClient } from '@app/components/Carousel/Carousel';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import { ImageCarousel } from '../Carousel/ImageCarousel';

const HomeLandingPage = () => {
  return (
    <div className="mx-auto relative sm:px-20 py-5">
      <div className="text-center w-full relative">
        <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full bg-black opacity-50"></div>
        <VideoBackground />
        <div className="absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h2 className="sm:text-4xl mb-4">LEARNED TECHNOLOGIES</h2>
          <h1 className="sm:text-[90px] sm:leading-[90px]">Technology for People</h1>
        </div>
        <div className="flex flex-col sm:flex-row relative items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site">
          <h3 className="flex-1 sm:text-3xl py-4 px-8 text-center sm:text-left">
            Take action <span> & further your Education</span>
          </h3>
          <a
            href="/contact"
            className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-site w-fit"
          >
            TAKE PART
          </a>
        </div>
      </div>

      <div
        className="flex mt-12 sm:mt-32 sm:gap-12 flex-col sm:flex-row"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="/images/yougotthis.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">Our Initiatives</h3>
            <p className="my-6 text-sm">
              Our initiatives bring people together to help solve real problems
              and evoke a positive change. Explore our initiatives and see what
              you can do to help.
            </p>
            <a
              href="/projects"
              className="text-purple-site py-6 font-site"
              data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
            >
              Read More
            </a>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="/images/pexels-athena-2582932.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site">Our Mission</h3>
            <p className="my-6 text-sm">
              We believe that education is a human right and a powerful tool for
              social change. We provide educational projects, learning resources
              and mentoring programs for kids of all ages and backgrounds. We
              aim to create a world where everyone has the opportunity to learn
              and grow.
            </p>
            <a href="/about" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:mt-32 mb-12 sm:gap-12">
        <div className="basis-2/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="/images/pexels-pixabay-33153.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-44 sm:mt-[-230px]">
            <h3 className="text-2xl font-site">Recent News</h3>
            <p className="my-6 text-sm">
              Get caught up on recent news and our latest achievements in the
              world of education.
            </p>
            <a href="/news" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="/images/pexels-pixabay-262508.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-530px]">
            <h3 className="text-2xl font-site">Take Part</h3>
            <p className="my-6 text-sm">
              We welcome contributions in whatever form they come. Whether you
              want to contribute your time as a volunteer, join us as a partner
              or donate resources towards helping us achieve our goals, there is
              always an opportunity to make a difference.
            </p>
            <a href="/contact" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-3xl sm:text-5xl text-center mb-10 sm:mb-20 font-site">
        2023 Projects
      </h2>
      <ImageCarousel />
      <CarouselClient />
    </div>
  )
}

export default HomeLandingPage