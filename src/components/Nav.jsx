import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='bg-[rgba(255_255_255_0)] text-white py-6 px-4 md:px-10 absolute w-full z-50'>
            <div className='flex justify-between items-center'>
                <img className='h-6 md:h-8' src="./logo-white.png" alt="logo" />
                <ul className='hidden lg:flex items-center gap-8 font-bold'>
                    <li className='text-[#f24d3a] cursor-pointer'>HOME</li>
                    <li className='hover:text-[#f24d3a] cursor-pointer'>PAGES</li>
                    <li className='hover:text-[#f24d3a] cursor-pointer'>PORTFOLIO</li>
                    <li className='hover:text-[#f24d3a] cursor-pointer'>BLOG</li>
                    <li className='hover:text-[#f24d3a] cursor-pointer'>EVENT</li>
                    <li className='hover:text-[#f24d3a] cursor-pointer'>SHOP</li>
                    <li className='hover:text-[#f24d3a] cursor-pointer'>ELEMENTS</li>

                    <li><FaSearch size={18} /></li>
                    <li><IoMdCart size={20} /></li>

                    <li className='bg-white p-2 rounded-full text-black cursor-pointer'>
                        <RxHamburgerMenu size={18} />
                    </li>
                </ul>
                <div className='lg:hidden flex items-center gap-4'>
                    <FaSearch size={18} />
                    <IoMdCart size={20} />
                    
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={22} />}
                    </button>
                </div>
            </div>
            <div className={`lg:hidden absolute top-full left-0 w-full bg-[#262626] transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-[400px] py-6" : "max-h-0"
            }`}>
                <ul className='flex flex-col items-center gap-6 font-bold'>
                    <li className='text-[#f24d3a]'>HOME</li>
                    <li>PAGES</li>
                    <li>PORTFOLIO</li>
                    <li>BLOG</li>
                    <li>EVENT</li>
                    <li>SHOP</li>
                    <li>ELEMENTS</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav