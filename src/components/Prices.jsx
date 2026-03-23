import React from 'react'

const Prices = () => {
    const data = [
        {
            id: 1,
            price: "33",
            class: "Single Class",
            h1: "Class Drop-in",
            h2: "Lorem ipsum dolor sit amet",
            h3: "Aenean massa",
            h4: "Quisque rutrum",
        },
        {
            id: 2,
            price: "48",
            class: "Per Month",
            h1: "Class Drop-in",
            h2: "Lorem ipsum dolor sit amet",
            h3: "Aenean massa",
            h4: "Quisque rutrum",
        },
        {
            id: 3,
            price: "99",
            class: "Premium Plan",
            h1: "Class Drop-in",
            h2: "Lorem ipsum dolor sit amet",
            h3: "Aenean massa",
            h4: "Quisque rutrum",
        },
    ]

    return (
        <section className='px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-20 bg-[#171717] text-white space-y-12'>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="absolute text-[#2a292e] font-extrabold text-6xl sm:text-7xl md:text-8xl opacity-40">
                    04
                </p>
                <div className="z-10 mt-6 md:mt-10">
                    <p className="font-extrabold text-2xl sm:text-3xl md:text-4xl max-w-sm">
                        Choose your pricing plan
                    </p>
                </div>
                <button className="z-10 mt-2 md:mt-10 w-fit px-6 sm:px-10 py-2.5 sm:py-3.5 bg-[#f24d3a] hover:bg-[#d43321] text-white font-bold transition">
                    Read More
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {data.map((single) => (
                    <div
                        key={single.id}
                        className='text-center py-10 sm:py-12 bg-[#2a292e] flex flex-col items-center justify-between space-y-8 hover:scale-105 transition duration-300'
                    >
                        <div>
                            <p className="relative inline-flex items-start font-bold text-3xl sm:text-4xl">
                                <span className="absolute -left-2 top-0 text-xs">$</span>
                                {single.price}
                            </p>
                            <p className='text-[#f24e35] font-light text-base sm:text-lg'>
                                {single.class}
                            </p>
                        </div>
                        <div className='space-y-6 w-full px-4'>
                            <p className='font-extrabold text-xl sm:text-2xl'>{single.h1}</p>
                            <p className='font-light text-sm sm:text-base'>{single.h2}</p>
                            <p className='font-light text-sm sm:text-base py-3 border-y border-[rgb(35_34_38)]'>
                                {single.h3}
                            </p>
                            <p className='font-light text-sm sm:text-base'>{single.h4}</p>
                        </div>
                        <div className='w-full'>
                            <button className="mt-4 px-8 sm:px-12 py-2.5 sm:py-3 bg-[#f24d3a] hover:bg-[#d43321] text-white font-bold transition">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Prices