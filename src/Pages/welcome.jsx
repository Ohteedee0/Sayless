
import React from 'react'
import wave from "../Components/Assets/wave.png";
import M1 from "../Components/Assets/M1.jpeg";
import M11 from "../Components/Assets/M1.png";
import M3 from "../Components/Assets/M3.jpeg";
import M2 from "../Components/Assets/M2.jpeg";

import { MoveHorizontal } from 'lucide-react';

export default function 
() {
  return (
    <div className='max-h-[900px] flex bg-gradient-to-b from-[#285dadc9] to-[#0d381a22] '>
      <div className='flex flex-1 flex-col justify-center gap-[20px] lg:pl-[180px]'>
        <h2 className='text-[#090909] font-extrabold mt-10'>NEW ARRIVALS</h2>
        <div>
          <div className='flex items-center gap-10'>
            <p className='text-[#171717] lg:text-[100px] font-[700]'>new</p>
            <img src={wave} alt='' className='w-[100px]' />
          </div>
          <p className='text-[#171717] lg:text-[100px] lg:font-[500]'>
            collection
          </p>
          <p className='text-[#171717] lg:text-9xl lg:font-[500]'>
            for everyone
          </p>
        </div>
        <div className='flex justify-center items-center gap-5 rounded text-white bg-[#F96E2A] lg:w-[310px]'>
          <div> Latest Collection</div>
          <MoveHorizontal />
        </div>
      </div>
      <div className='w-[50%] hidden md:block'>
        <img src={M1} alt='' className='w-full h-full object-cover' />
      </div>
    </div>
  );
}

