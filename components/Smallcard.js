import React from 'react'
import Image from 'next/image'

function Smallcard({ img,location, distance}) {
    return (
        <div className="flex m-2 rounded-lg 
        transition transform
        duraton-500
        hover:scale-105
        hover:shadow-md
        hover:bg-gray-100
        ">
            {/* Left */}
            <div className="relative minh-16 w-16">
                <Image
                    src={img}
                    layout="fill"
                    class="rounded-lg"
         /> 
            </div>
            {/* Right */}
            <div class="mx-2">
                <h1 className="font-bold text-md">{location}</h1>
                <h1 className="text-md">{distance}</h1>
            </div>
        </div>
    )
}

export default Smallcard
