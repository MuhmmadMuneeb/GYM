import React from 'react'

const Weight = () => {
    return (
        // Changed flex to flex-col for mobile, flex-row for medium screens and up
        <section className='min-h-screen flex flex-col md:flex-row items-center bg-[#1c1c1c] overflow-hidden'>
            
            {/* Content Side */}
            <div className='relative w-full md:w-1/2 flex justify-center items-center flex-col py-20 px-6 md:py-0'>
                {/* Responsive positioning for the background number */}
                <p className='absolute top-[10%] left-[10%] md:top-[23%] md:left-[20%] font-extrabold text-7xl md:text-8xl z-0 font-serif text-[#3f3e42] select-none'>
                    01
                </p>
                
                <div className='relative z-10'>
                    <h1 className='text-white font-bold text-4xl md:text-5xl mb-5 leading-tight'>
                        Built to bring <br className="hidden md:block" /> best results
                    </h1>
                    <p className='max-w-[450px] text-[#899c9c] text-base md:text-[17px] font-light leading-relaxed'>
                        Tune up your shoulders, legs and lower back. Choose a workout that can improve your balance, strength and overall condition. Our team of experts will follow you through the whole workout process. Your body will thank you.
                    </p>

                    <button className='w-full md:w-auto px-10 py-3.5 bg-[#f24d3a] hover:bg-[#d43321] text-white mt-8 font-bold cursor-pointer transition-colors uppercase tracking-wider'>
                        Read More
                    </button>
                </div>
            </div>

            {/* Image Side */}
            <div className='w-full md:w-1/2 h-[400px] md:h-full'>
                <img 
                    className='w-full h-full object-cover md:object-contain' 
                    src="/weightlift.jpg" 
                    alt="Weightlifting" 
                />
            </div>
        </section>
    )
}

export default Weight