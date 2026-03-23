import React from 'react'

const Weight = () => {
    return (
        <section className='h-screen flex items-center bg-[#1c1c1c]'>
            <div className='relative h-full w-1/2 flex justify-center items-center flex-col'>
                <p className='absolute top-[23%] left-[20%] font-extrabold text-8xl z-0 font-serif text-[#3f3e42]'>01</p>
                <div className='absolute'>
                    <h1 className='text-white font-bold text-5xl mb-5 '>Built to bring <br />
                        best results</h1>
                    <p className='max-w-[450px] text-[#899c9c] text-[17px] font-light'>Tune up your shoulders, legs and lower back. Choose a workout that can improve your balance, strength and overall condition. Our team of experts will follow you through the whole workout process. Your body will thank you.</p>

                    <button className='px-10 py-3.5 bg-[#f24d3a] hover:bg-[#d43321] text-white mt-5 font-bold cursor-pointer'>Read More</button>
                </div>
            </div>
            <div className='h-full w-1/2'>
                <img className='object-contain' src="/weightlift.jpg" alt="" />
            </div>
        </section>
    )
}

export default Weight
