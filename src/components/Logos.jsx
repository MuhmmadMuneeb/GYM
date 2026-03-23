import React from 'react'

const Logos = () => {
    return (
        <section className="bg-[#f24d3a] py-10 sm:py-14 md:py-16">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                
                <div className="
                    flex flex-wrap items-center justify-center
                    gap-6 sm:gap-8 md:gap-12
                    [&>img]:cursor-pointer
                ">
                    
                    {[1,2,3,4,5].map((item) => (
                        <img
                            key={item}
                            src={`./logo${item}.png`}
                            alt="brand-logo"
                            className="
                                h-8 sm:h-10 md:h-12 lg:h-14
                                object-contain
                                opacity-80 hover:opacity-100
                                transition duration-300
                                hover:scale-110
                            "
                        />
                    ))}
                    
                </div>
            </div>
        </section>
    )
}

export default Logos