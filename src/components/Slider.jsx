import { useEffect, useRef, useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const data = [
    {
        id: 1,
        heading: "Since starting the over 60's mat class at create, I am much more aware of my body, how I move and my posture. As a result, I no longer take pain medication for my back!",
        para1: "Krystina Rynes",
        para2: "Park Wimbledon",
    },
    {
        id: 2,
        heading: "Since starting the over 60's mat class at create, I am much more aware of my body, how I move and my posture. As a result, I no longer take pain medication for my back!",
        para1: "Krystina Rynes",
        para2: "Park Wimbledon",
    },
    {
        id: 3,
        heading: "Since starting the over 60's mat class at create, I am much more aware of my body, how I move and my posture. As a result, I no longer take pain medication for my back!",
        para1: "Krystina Rynes",
        para2: "Park Wimbledon",
    },
]





const Slider = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideWidth, setSlideWidth] = useState(window.innerWidth);






    // Update width on resize
    useEffect(() => {
        const handleResize = () => setSlideWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Move slider
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth
                }px)`;
        }
    }, [currentSlide, slideWidth]);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === data.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? data.length - 1 : prev - 1
        );
    };

    return (
        <div className="h-screen w-full relative overflow-hidden bg-fixed  bg-cover bg-center bg-[url('/slider-bg.jpg')]">

            {/* SLIDER CONTAINER */}
            <div
                ref={sliderRef}
                className="flex flex-nowrap w-screen transition-transform duration-700 ease-in-out"
            >
                {data.map((slide, index) => (
                    <div
                        key={index}
                        className="h-screen w-full shrink-0 relative flex items-center px-16"

                    >
                        {/* Content */}
                        <div className="relative z-20 h-full w-full  text-white font-serif flex flex-col justify-center items-center space-y-7 ">
                            <span className="text-7xl font-extrabold">'</span>
                            <p className="text-3xl font-bold text-center max-w-3xl">{slide.heading}</p>
                            <p className="uppercase font-normal">
                                <span>{slide.para1},</span>
                                <span>{slide.para2}</span>
                            </p>
                        </div>
                    </div>
                ))}

            </div>

            {/* LEFT BUTTON */}
            <button
                onClick={prevSlide}
                className="absolute  left-6 top-1/2 transition-transform duration-300 ease-in-out  hover:-translate-x-3.5  -translate-y-1/2 cursor-pointer  text-gray-400 p-5 rounded-full  "
            >
                <GoChevronLeft size={70} />
            </button>

            {/* RIGHT BUTTON */}
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 hover:translate-x-3.5 transition-transform duration-300 ease-in-out  -translate-y-1/2 cursor-pointer  text-gray-400 p-5 rounded-full "
            >
                <GoChevronRight size={70} />
            </button>

            {/* DOTS */}
            {/* <div className="absolute bg-white px-3.5 py-2.5 rounded-4xl  bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {data.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-3 h-3 rounded-full transition-all ${currentSlide === i
                            ? "bg-gray-400 scale-125"
                            : "bg-black"
                            }`}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default Slider;
