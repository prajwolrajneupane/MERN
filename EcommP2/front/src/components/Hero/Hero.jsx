import React from 'react'
import hand_icon from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
function Hero() {
  return (
    <div className='hero bg-gradient-to-t from-sky-500 to-indigo-100 flex h-190'>
      <div className="hero-left flex flex-col justify-center gap-5 pl-[180px] leading-[1.1] flex-1">
        <h2 className='text-black text-2xl font-bold'>NEW ARRIVALS ONLY</h2>
      <div>

        <p>New collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn flex justify-center items-center gap-5 w-[310px] h-[70px] border-1 rounded-4xl mt-10 bg-red-300 text-white font-[22px] font-bold">
        <div>Latest Collection</div>
        <img src={arrow} alt="" />
      </div>
    </div>
    <div className="hero-right flex-1 flex items-center justify-center">
<img src={hero_image} alt="" />
    </div>
      </div>

  )
}

export default Hero
