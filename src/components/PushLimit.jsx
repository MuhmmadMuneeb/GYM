import React from 'react'

const PushLimit = () => {
    const cards = [
        { id: 1, h1: "Quality Equipment", p: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipisc.", img: "/dumle.png" },
        { id: 2, h1: "Healthy Nutrition Plan", p: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipisc.", img: "/calender.png" },
        { id: 3, h1: "Shower Service", p: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipisc.", img: "/service.png" },
        { id: 4, h1: "Unique to Your Needs", p: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipisc.", img: "/heart.png" },
    ]

    return (
        <section className='bg-[#121212] text-white py-12 md:py-20 px-4 sm:px-8 md:px-16 text-center'>

    
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
                Push your limits forward
            </h1>

        
            <p className='text-[#899c9c] text-sm sm:text-base md:text-lg mt-4 max-w-3xl mx-auto leading-relaxed'>
                Train with the best experts in bodybuilding field. Your results will speak to themselves.
                Try the latest exercising trends, innovative equipment and special nutrition plans.
            </p>

          
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

                {cards.map((card) => (
                    <div
                        key={card.id}
                        className='flex flex-col items-center text-center space-y-4 p-4 hover:scale-105 transition duration-300'
                    >
                        <img className='h-16 sm:h-20 object-contain' src={card.img} alt="" />

                        <h2 className='font-extrabold text-lg sm:text-xl'>
                            {card.h1}
                        </h2>

                        <p className='text-[#899c9c] text-sm sm:text-base'>
                            {card.p}
                        </p>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default PushLimit