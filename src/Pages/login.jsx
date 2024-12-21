import React from 'react'

export default function login() {
  return (
    <div className='w-[100%] h-[80vh] bg-[#ffce3fe] pt-[100px] bg-[white] '>
      <div className='max-w-[580px] h-[600px] bg-white m-[auto] p-10 shadow-lg'>
        <h1 className='  mb-[20px] mr-[0] ml-0'>Login</h1>
        <input
          className='h-[72px]  w-[100%] pl-[20px] border border-[solid] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] mb-5'
          type='text'
          placeholder='Email Address'
        />

        <input
          className='h-[72px]  w-[100%] pl-[20px] border border-[solid] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'
          type='text'
          placeholder='Password'
        />
        <button className='w-[100%] h-[72px] text-[white] mt-[30px] border-none text-[24px] font-[500] cursor-pointer bg-[#180d0d]'>
          Login
        </button>
      </div>
    </div>
  );
}
