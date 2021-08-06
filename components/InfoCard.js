import React from 'react'
import Image from 'next/image'

function InfoCard({img, location, title, description, star, price, total}) {
    return (
        <div className="rounded-md shadow-md mb-5 flex">
            <div
            className="Logo relative flex item-center p-3 
            h-fill w-40
            md:h-48 md:w-60
            lg:h-56 lg:w-64
            // xl:h-56 xl:w-80
            ">

                <Image
                    src={img}
                    layout="fill"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-md"
                />
            </div>
            {/* Text */}
            <div className="px-3 flex-1">
                <p className="text-md text-gray-500">{location}</p>
                <h1 className="text-2xl">{title}</h1>
                <div className="mt-[11px] w-[32px] border-t-2 border-gray-400"></div>
                <p className="text-sm text-gray-500">{description}</p>
                <div className="flex">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <h1 className="text-yellow-300">{star}</h1>
                    
                </div>
                <div className="bottom-0 right-0 w-max ml-auto mt-auto">
                    <h1 className="text-xl font-bold ml-auto">{price}</h1>
                    <p>{total}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
