import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className="mx-4 lg:mx-32 xl:mx-44 py-16 bg-gray-50">
      {/* Heading */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent mb-12">
        Customer Testimonials
      </h1>

      {/* Testimonials Row */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[30%] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 flex flex-col justify-between"
          >
            {/* Quotation mark */}
            <p className="text-5xl text-gray-300 leading-none mb-4">“</p>

            {/* Testimonial text */}
            <p className="text-gray-700 text-base italic mb-6 flex-grow">
              {item.text}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 mt-4">
              <img
                src={item.image}
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <p className="font-semibold text-gray-900">{item.author}</p>
                <p className="text-sm text-gray-500">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
