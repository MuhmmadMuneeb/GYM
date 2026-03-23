import React from 'react'

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">

            {/* Background */}
            <div className='absolute inset-0 bg-center bg-cover bg-[url("/hero-img.jpg")] z-[-2]' />

            {/* Overlay Content */}
            <div className='relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 lg:px-24'>

                {/* Main Heading */}
                <h1 className='font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[8px] sm:tracking-[15px] md:tracking-[25px] text-[#f24d3a]'>
                    STRONG
                </h1>

                {/* Description */}
                <p className='mt-4 max-w-md sm:max-w-lg md:max-w-xl text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-white'>
                    BEAT THE ROUTINE. TRAIN AT THE CALIBER OF WORLD CHAMPIONS AND
                    GET IN THE BEST SHAPE OF YOUR LIFE
                </p>

                {/* Plus Icons */}
                <div className='mt-6 flex gap-3'>
                    <img className='h-6 sm:h-8' src="/plus.png" alt="" />
                    <img className='h-6 sm:h-8' src="/plus.png" alt="" />
                </div>
            </div>

            {/* Side Rotated Text (Hide on small screens) */}
            <p className='hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 text-white font-bold text-2xl xl:text-3xl rotate-90 tracking-wide'>
                WHAT WE HAVE TO OFFER
            </p>

            {/* Background Year Image */}
            <div className='hidden md:block fixed z-[-1] left-0 top-1/2'>
                <img className='h-48 lg:h-72' src="/2018.png" alt="" />
            </div>

        </section>
    )
}

export default Hero