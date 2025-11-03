import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-20 lg:px-44'>
        {/*------left side------ */}
        <div className=''>
            <h1 className='text-4xl xl-text-5xl 2xl:text-6xl font-bold text-neutral-900 leading-tight'>
                Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'> Background</span> from <br className='max-md:hidden' />
                 the images for free
            </h1>
            <p className='my-6 text-[15px] text-gray-700 '>“Snap. Tap. Gone.”
                Say goodbye to messy backgrounds! Our app instantly removes them and  lets your <br className='max-sm:hidden'/>photos shine. Perfect for product shots,
                profiles, and content creators who love clean, aesthetic images.</p>
                <div>
                    <input type="file" name='' id='upload1' hidden />
                    <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700  ' htmlFor="upload1">
                        <img width={20}src={assets.upload_btn_icon} alt="" />
                        <p className='text-white text-sm '>upload your image</p>
                    </label>
                </div>
        </div>
        {/*------ right  side------ */}
        <div className='w-full max-w-md '>
            <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header