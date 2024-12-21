import React from "react";
import img from "../Assets/saylesslogo.png";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
export default function Navbar() {
  return (
    <div className='flex justify-around items-center p-[16px]  bg-[black]'>
      <ul className='lg:flex cursor-pointer lg:gap-[20px] sm:gap-[10px]font-[50px] text-white'>
        <li>Men</li>
        <li>Women</li>
        <li>Accessories</li>
      </ul>

      <div className='lg:flex justify-center items-center gap-10'>
        <img className='w-[150px] mt-0' src={img} alt='' />
        {/* <p className="text-[#171717] text-[40px] ">SAYLESS</p> */}
      </div>

      <div className='lg:flex-row flex-col flex gap-10 items-center'>
        <Link to='/signup'>
          <button className='lg:w-[100px] py-3 px-8 border  bg-[white] lg:rounded-xl text-[#515151] font-[20px] active:bg-[#f3f3f3]  '>
            Login
          </button>
        </Link>
        <Link to='/cart' className='text-blue-700'>
          <ShoppingCart size={30} />
        </Link>
        {/* <div className='lg:w-[22px] lg:h-[22px] flex justify-center sm:w-[5px] sm:h-[5px] items-center bg-[red] text-[white] lg:mt-[-35px]  lg:ml-[-55px] border rounded-full sm:mt-[-50px] sm:ml-[px]'>
          0
        </div> */}
      </div>
    </div>
  );
}
