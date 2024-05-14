import React from 'react'

const NumbersSection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:justify-between items-center font-site">
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] block sm:leading-[200px] text-purple-site">
            40K
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:right-0 sm:top-[190px]">
            Dollars
            <br />
            Raised
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            8K
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[50px] sm:left-[130px] bg-white">
            Graduate
            <br />
            Students
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            120
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[130px] sm:left-[150px] bg-white">
            Technology
            <br />
            Centers
          </span>
        </div>
      </div>
  );
}

export default NumbersSection