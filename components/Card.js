import React from 'react'
import Image from 'next/image'

function Smallcard({ img,title}) {
    return (
        <div className="rounded-lg 
            transition transform
            duraton-500
            cursor-pointer 
            hover:scale-105
            hover:shadow-md
            hover:bg-gray-100
            h-80 w-80
        ">
             <div className=" h-80 w-72 z-10"> 

                <Image
                    src={img}
                    layout= "fill"
                    class="rounded-lg"
                /> 
            </div>
            <h3 className="font-bold text-xl z-20">{title}</h3>
            
        </div>
        
    )
}

export default Smallcard
