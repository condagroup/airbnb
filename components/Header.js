import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <header className="sticky left-0 top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3
        md:p-5
                
        ">

            {/* Left Logo */}
            <div className=" Logo  relative flex item-center h-10 cursor-pointer p-3">

                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    
                />
            </div>
            {/* Middle Search */}
            <div className="seasch flex rounded-full md:border-2 p-1 
            focus-within:shadow-md duration-700">
                <input type="text" placeholder="Search..." className="
                px-2 outline-none flex-grow rounded-full"/>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 p-2 bg-red-400 rounded-full text-white hidden md:inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            <div className="flex place-items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {/* menue */}
                <div className="flex place-items-center space-x-2 border-2 cursor-pointer rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 p-1 pl-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 p-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

        </header>
    )
}

export default Header
