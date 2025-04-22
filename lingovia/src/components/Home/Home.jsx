import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaMicrophone } from "react-icons/fa6"
import { VscArrowUp } from "react-icons/vsc";
import { PiSwapBold } from "react-icons/pi";
import { HiSpeakerWave } from "react-icons/hi2";
import ChatInput from './ChatInput';


export default function Home() 
{
//  const[prompt, setPrompt]=useState("")
//  const[answer,setanswer]=useState("")
    return (
        <div className="mx-auto w-full  bg-[#a094a6] flex flex-wrap
        justify-center flex-col h-165 items-center pt-10 pb-10">
            
           <div  className='mx-5 my-5  flex flex-wrap shadow-2xl bg-white rounded-full shadow-md w-96'>
              
            <ChatInput/>
            
           {/* </div>
           <div  value={answer}
           className='bg-white w-lg p-2 shadow-2xl rounded-xl'>
            <div className='flex flex-wrap justify-end gap-2 text-fuchsia-950 text-2xl'>
                <button><PiSwapBold /></button>
                <button ><HiSpeakerWave /></button>
            </div> */}
           </div>
      </div>
            
           
    
    );
}