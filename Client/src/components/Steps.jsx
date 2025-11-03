import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-36 bg-gray-50">
      {/* Heading */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
        Steps to remove background <br /> image in a few seconds
      </h1>

      {/* Step Boxes */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 xl:mt-24">
        {/* Step 1 */}
        <div className="flex items-start gap-4 bg-white border border-gray-200 shadow-md hover:shadow-lg p-6 sm:p-7 rounded-xl hover:scale-105 transition-all duration-500 w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
          <img className="w-10 h-10 object-contain" src={assets.upload_icon} alt="Upload Icon" />
          <div>
            <p className="text-lg font-semibold text-gray-800">Upload Image</p>
            <p className="text-sm text-gray-500 mt-1">
              Choose or drag an image that you want to remove the background from.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4 bg-white border border-gray-200 shadow-md hover:shadow-lg p-6 sm:p-7 rounded-xl hover:scale-105 transition-all duration-500 w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
          <img className="w-10 h-10 object-contain" src={assets.remove_bg_icon} alt="Remove Background Icon" />
          <div>
            <p className="text-lg font-semibold text-gray-800">Remove Background</p>
            <p className="text-sm text-gray-500 mt-1">
              Our AI instantly removes the background with one click — no effort needed.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4 bg-white border border-gray-200 shadow-md hover:shadow-lg p-6 sm:p-7 rounded-xl hover:scale-105 transition-all duration-500 w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
          <img className="w-10 h-10 object-contain" src={assets.download_icon} alt="Download Icon" />
          <div>
            <p className="text-lg font-semibold text-gray-800">Download Image</p>
            <p className="text-sm text-gray-500 mt-1">
              Download your new clean image instantly in high quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
