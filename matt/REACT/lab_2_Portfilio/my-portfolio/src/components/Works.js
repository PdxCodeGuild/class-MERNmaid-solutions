import React from "react"
import Pokemon from '../img/pokemon.png'

export default function Works() {
    return (
        <>
            <h1 id='myWorks' className="text-white text-[50px] text-center mt-56" >My Works</h1>

            <div className='flex justify-center mt-5'>
                <div>
                    <h1 id='myWorks' className="text-white text-[30px] mb-5 underline decoration-green-700 underline-offset-8">Vanilla Js Pokemon</h1>
                    <img src={Pokemon}
                    className="h-52"></img>
                </div>
                <h1 className="text-white pt-16 pl-5 w-60">A mock Gameboy Color Pokémon game where you can run around in a field, battle and catch Pokémon. Your progress is tracked in your Pokédex. See if you can catch them all.</h1>
                    
            </div>
        </>
    )
}