import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-32 mt-14 min-h-[80vh] bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white rounded-2xl shadow-lg px-6 md:px-10 py-10 transition-all duration-300 hover:shadow-2xl">
        
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-violet-700 to-gray-700 bg-clip-text text-transparent">
          Your Result
        </h2>

        {/* Images Section */}
        <div className="grid sm:grid-cols-2 gap-10 items-center justify-center">
          
          {/* Original Image */}
          <div className="text-center space-y-4">
            <p className="font-semibold text-gray-700 tracking-wide">Original</p>
            <div className="border rounded-xl overflow-hidden bg-gray-50 p-3 shadow-sm hover:shadow-md transition">
              <img
                src={assets.image_w_bg}
                alt="Original"
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          </div>

          {/* Background Removed Image */}
          <div className="text-center space-y-4">
            <p className="font-semibold text-gray-700 tracking-wide">Background Removed</p>
            <div className="relative border rounded-xl overflow-hidden bg-layer  bg-gray-50 p-3 shadow-sm hover:shadow-md transition h-[300px] flex items-center justify-center">
              
              {/* Uncomment this when ready */}
              {/* <img
                src={assets.image_wo_bg}
                alt="Background Removed"
                className="w-full h-auto object-contain rounded-md"
              /> */}

              {/* Loading Spinner */}
              <div className="flex items-center justify-center">
                <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4">
  {/* Try Another Button */}
  <button
    className="w-full sm:w-auto px-8 py-2.5 border-2 border-violet-600 text-violet-600 font-medium rounded-full 
               hover:bg-violet-600 hover:text-white transition-all duration-300 ease-in-out 
               hover:shadow-md hover:scale-105 active:scale-95"
  >
    Try Another
  </button>

  {/* Download Button */}
  <a
    href="#"
    className="w-full sm:w-auto px-8 py-3 bg-violet-600 text-white font-medium rounded-full 
               shadow-md hover:bg-violet-700 hover:shadow-lg 
               hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out text-center"
  >
    Download Image
  </a>
</div>

      </div>
    </div>
  )
}

export default Result
