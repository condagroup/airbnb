import React, { useState } from "react";
import Image from 'next/image'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";


function Header() {
    // const [searchInput, setSearchInput] = useState('')

    const [searchInput, setsearchInput] = useState('');
    const [StartDate, setstartDate] = useState(new Date());
    const [EndDate, setendDate] = useState(new Date());
    const [NoOfGuest, setNoOfGuest] = useState(1)

    const router = useRouter()

    const handleSelect = (ranges) =>{
        // console.log(ranges);
        
        setstartDate(ranges.selection.startDate)
        setendDate(ranges.selection.endDate)
    }
      
    const selectionRange = {
        startDate:  StartDate,
        endDate: EndDate,
        key: 'selection'
    };
        
    const search = (ranges) =>{
        router.push({
            pathname:"/search",
            query: {
                Location: searchInput,
                Guest:NoOfGuest,
                StartDate: format(StartDate, "dd.MM.yy"),
                EndDate: format(EndDate, "dd.MM.yy")
            }
        })
    }

    // router.push("/")
    return (
        <header className="sticky left-0 top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3
        md:p-5
                
        ">

            {/* Left Logo */}
            <div
            className=" Logo  relative flex item-center h-10 cursor-pointer p-3">

                <Image
                    src="/header-logo.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    onclick={() => router.push("/")}
                    
                />
            </div>
            {/* Middle Search */}
            <div className="seasch flex rounded-full md:border-2 p-1 
            focus-within:shadow-md duration-700">
                <input 
                value={searchInput}
                onChange={(e) =>setsearchInput(e.target.value)}
                type="text" placeholder="Search..." className="
                px-2 outline-none flex-grow rounded-full"/>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 p-2 bg-red-400 rounded-full text-white hidden md:inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            {/* Right menue icons */}
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
        {searchInput && 
        <div className="flex flex-col col-span-3 mx-auto mt-3 w-full
        sm:w-auto">
            <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#fd5b61"]}
                onChange={handleSelect}
                className="w-fill"
            />
            <div className="flex place-items-center">
                <h1 className="text-2xl pl-2 flex-grow">Number of Guests</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <input type="number" className="w-12 pl-2" 
                onChange={(e) =>setNoOfGuest(e.target.value)}
                min={1}
                value={NoOfGuest}/>
            </div>
            <div className="flex pt-5">
                <button className="flex-grow" onClick={()=>setsearchInput('')}>Cancel</button>
                <button className="flex-grow text-red-500 flex place-content-center"
                onClick={search}
                >Search<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
            </div>
        </div>
        }
        </header>
    )
}

export default Header   