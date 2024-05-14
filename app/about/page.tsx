import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import Image from 'next/image';
export default async function About() {
  return (
    <div className="relative bg-gray-200">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="/images/macbook.jpg"
          alt="projects"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">About LearnedTech</h1>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          We are passionate about technology and business. Most importantly we love people. At the core of our existence is the desire to
          restore a sense of humanity by crafting and delivering superb technology solutions to our strategic partners. We have over a decade
          of experience in education , technology and business. Our expertise is found in software development, consulting, research, learning
          programmes design and creation of digital solutions.
        </p>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          Our business consulting offers advisory and practical technology solutions. We offer a wide range of high quality and relevant programmes in business and technology while assisting individuals and organizations to achieve sustainable improved performance through an integrated approach to consulting, research and training.
        </p>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          We are LearnedTech and we invite you to join us in making a
          difference.
        </p>
        {/* <div className="justify-center flex flex-col sm:flex-row gap-6 mt-10 text-center">
          <a href="" className="btn-main text-lg">
            2035 Financial Statement
          </a>
          <a href="" className="btn-main text-lg">
            Certification Registry
          </a>
        </div> */}
        <h2 className="text-center text-4xl my-10 sm:my-20 font-site">
          Our Goals
        </h2>
        <div className="flex flex-col sm:flex-row gap-12 justify-between bg-gray-100">
          <div className="text-center flex flex-col items-center gap-4">
            <Image
              src="/images/MobileDevelopment.png" // Provide the path to your image
              alt="Spread empathy through education"
              width={150} // Set width as per your requirement
              height={150} // Set height as per your requirement
            />
            <span className="font-site">
              Mobile Application
              <br />Development
            </span>
          </div>

          <div className="text-center flex flex-col items-center gap-4">
            <Image
              src="/images/WebDesignandDevelopment.jpg" // Provide the path to your image
              alt="Increase donations equally across 24 countries"
              width={150} // Set width as per your requirement
              height={150} // Set height as per your requirement
            />
            <span className="font-site">
              Web Design and
              <br /> Development
            </span>
          </div>

          <div className="text-center flex flex-col items-center gap-4">
            <Image
              src="/images/ITConsulting.png" // Provide the path to your image
              alt="Spread empathy through education"
              width={150} // Set width as per your requirement
              height={150} // Set height as per your requirement
            />
            <span className="font-site">
              IT consulting
              <br />
              Software Development &
              <br />
              Business Analysis
            </span>
          </div>

          <div className="text-center flex flex-col items-center gap-4">
            <Image
              src="/images/CustomSoftwareDevelopment.png" // Provide the path to your image
              alt="Spread empathy through education"
              width={150} // Set width as per your requirement
              height={150} // Set height as per your requirement
            />
            <span className="font-site">
              Custom Software
              <br /> Development
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
