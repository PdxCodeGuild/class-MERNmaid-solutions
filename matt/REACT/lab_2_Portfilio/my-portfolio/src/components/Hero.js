import React from "react"

import selfie from '../img/LP.png'
import Works from './Works'

export default function Hero() {
    function scrollTime() {
        var element = document.getElementById("myWorks")
        element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
    return (
        <>
            <div className='flex justify-center mt-20'>
                <div className='w-96'>
                    
                    <h1 className="
                        text-white 
                        text-[50px] 
                        mt-28" 
                        >Hey, I'm Matt.
                    </h1> 
            
                    <h2 className="
                        text-gray-500
                        text-[25px] 
                        mt-5"
                    > A software and web developer out of Oregon. I teach at night and work on my masters during the day</h2>
                    
                    <button onClick={scrollTime}
                        class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full mt-7">
                        My Works
                    </button>
                </div>

                <div className='flex justify-center'>
                    <img 
                        className='h-72 mt-28 ml-20 rounded-lg border-b-4 border-r-4 border-green-700'
                        src={selfie} alt="seflie" 
                    />
                </div>
            </div>
    
                    {/* <AboutMe /> */}
                    <Works />
        </>
    )
}