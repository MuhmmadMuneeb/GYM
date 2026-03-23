import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClock } from "react-icons/lu";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaVimeoV } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#262626] text-[#6f7073] px-4 sm:px-8 md:px-16 py-12 md:py-16">

            {/* Top Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

                {/* Column 1 */}
                <div className="space-y-5">
                    <img className="h-6 object-contain" src="./logo-white.png" alt="logo" />

                    <p className="font-light leading-relaxed text-sm sm:text-base">
                        Cum sociis Theme natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Curabitur ullamcorper.
                    </p>

                    <div className="space-y-3 text-sm sm:text-base">
                        <p className="flex items-start gap-3 hover:text-white transition cursor-pointer">
                            <FiPhoneCall className="text-lg mt-1" />
                            1-677225-124-44227-84
                        </p>

                        <p className="flex items-start gap-3 hover:text-white transition cursor-pointer">
                            <HiOutlineLocationMarker className="text-lg mt-1" />
                            84 Main Collins Street
                        </p>

                        <p className="flex items-start gap-3 hover:text-white transition cursor-pointer">
                            <LuClock className="text-lg mt-1" />
                            Mon - Sat 8.00 - 18.00
                        </p>
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <h2 className="text-white font-bold text-xl sm:text-2xl mb-5">Latest News</h2>

                    <div className="space-y-5">
                        {[
                            { title: "Fitness Class for You", date: "October 22, 2017" },
                            { title: "Gym Exercises to Boost your Football", date: "October 22, 2017" },
                            { title: "Boost Performance.", date: "November 22, 2017" },
                        ].map((item, index) => (
                            <div key={index} className="cursor-pointer group">
                                <p className="font-semibold text-base sm:text-lg group-hover:text-white transition">
                                    {item.title}
                                </p>
                                <p className="text-xs sm:text-sm uppercase font-light group-hover:text-white transition">
                                    {item.date}
                                </p>
                                {index !== 2 && <hr className="mt-2 border-[#3a3a3a]" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Column 3 */}
                <div>
                    <h2 className="text-white font-bold text-xl sm:text-2xl mb-5">
                        Recent Projects
                    </h2>

                    <div className="space-y-2 text-sm sm:text-base font-medium">
                        {[
                            "March 2018",
                            "February 2018",
                            "January 2018",
                            "December 2017",
                            "November 2017",
                            "October 2017",
                        ].map((item, index) => (
                            <p
                                key={index}
                                className="cursor-pointer hover:text-white transition"
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Column 4 */}
                <div>
                    <h2 className="text-white font-bold text-xl sm:text-2xl mb-5">Contact</h2>

                    <form className="space-y-3">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-[#1e1e1e] px-3 py-2.5 text-sm sm:text-base text-white placeholder-[#6f7073] outline-none focus:ring-2 focus:ring-[#f24d3a]"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-[#1e1e1e] px-3 py-2.5 text-sm sm:text-base text-white placeholder-[#6f7073] outline-none focus:ring-2 focus:ring-[#f24d3a]"
                        />

                        <textarea
                            placeholder="Comment"
                            rows="4"
                            className="w-full bg-[#1e1e1e] px-3 py-2.5 text-sm sm:text-base text-white placeholder-[#6f7073] outline-none focus:ring-2 focus:ring-[#f24d3a]"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full sm:w-auto mt-2 px-6 sm:px-10 py-2.5 sm:py-3 bg-[#f24d3a] hover:bg-[#d43321] text-white font-bold transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#3a3a3a] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-center md:text-left">

                <p>© 2017 Qode Interactive, All Rights Reserved</p>

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <span className="text-white font-semibold">Follow us</span>

                    <div className="flex items-center gap-4 text-lg">
                        {[FaTwitter, FaFacebookF, FaLinkedinIn, FaVimeoV].map(
                            (Icon, index) => (
                                <Icon
                                    key={index}
                                    className="cursor-pointer hover:text-white transition"
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;