import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ChatInput from './ChatInput';


export default function Dashboard() 
{
    return (
        <div className=" w-full  shadow-xl border-gray-900 border-t  bg-black flex flex-wrap
        justify-center flex-col h-165 items-center overflow-hidden ">
        <div >
            <ChatInput/>
           </div>
        </div>
            
           
    
    );
}