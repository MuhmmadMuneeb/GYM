import React from 'react'

const SlideButton = () => {
    return (
        <button className="group h-15 flex items-center text-white bg-[#f24d3a] font-bold tracking-wider">

            {/* Text */}
            <span className="px-8 py-4">
                READ MORE
            </span>

            {/* Divider */}
            <span className="w-[1px] h-full bg-white"></span>

            {/* Arrow Area */}
            <span className="relative w-9 h-9 flex items-center justify-center overflow-hidden">

                {/* Arrow 1 */}
                <span className="absolute text-4xl z-20 transition-transform duration-300 group-hover:-translate-x-full">
                    →
                </span>

                {/* Arrow 2 */}
                <span className="absolute text-4xl z-20 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                    →
                </span>

            </span>
        </button>
    )
}

export default SlideButton

