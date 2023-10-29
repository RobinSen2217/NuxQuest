import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Fade from 'react-reveal/Fade';

function Hero() {
  return (
    <div className="text-white text-4xl min-[455px]:text-7xl font-extrabold flex flex-col bg-[url('https://exiarts.com/cdn/shop/products/69_142b8058-24be-4c10-919a-4a1bacc234fe_600x.png?v=1622804839')] bg-cover bg-center bg-no-repeat justify-center  h-[350px] pb-3 pl-2 py-4 gap-y-2">
      <Fade cascade>
        <span className=' text-black'>Welcome Adventurer
</span>
        </Fade>
    <div className=" text-red-600 text-2xl min-[455px]:text-5xl ">
          <Typewriter
          
            words={['Whatever you seek.', 'Anything you need.', 'Expectations shall exceed.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1000}
          />

    </div>
    </div>
  )
}

export default Hero
