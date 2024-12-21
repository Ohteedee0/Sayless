import React from "react";
import cap from '../Components/Assets/cap.png';

export default function Offers() {
  return (
    <div className='lg:w-[65%] sm:w-[50%]  flex  lg:m-[auto] lg:pr-[140px] lg:pl-[140px] bg-gradient-to-b from-[#78B3CE] to-[#e1ffea22] sm:pt-[100px] my-40'>
      <div className='flex-1 flex flex-col justify-center '>
        <h1 className='text-[#171717] font-[600] sm:text-[50px]  lg:text-[80px] '>
          Exclusive
        </h1>
        <h1 className='text-[#171717] font-[600] lg:text-[80px]'>
          Offers For You
        </h1>
        <p className='text-[#171717] text-[22px] font-[600] '>
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-[white] text-[22px] font-[500] mt-[30px] cursor-pointer'>
          Check Now
        </button>
      </div>

      <div className='flex-1 flex justify-[flex-end] pt-[50px]'>
        <img src={cap} alt='' />
      </div>
    </div>
  );
}
