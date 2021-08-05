import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className="relative h-[300px] sm:[400px] lg:h-[500px] xl:h-600px 2xl:h-[650px]">
            <Image
                    src="https://links.papareact.com/0fm"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"    
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not shure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-4 mt-2 font-bold rounded-full shadow-md 
                hover:shadow-xl
                hover:scale-105
                active:scale-90
                duration-300" >
                    I'm Flexible
                </button>
            </div>
        </div>
    )
}

export default Banner
