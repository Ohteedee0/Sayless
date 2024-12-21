import React from 'react'
import { Link } from 'react-router-dom';
import { data_products } from './products';

export default function items(props) {
const wat = `${props.name}-${props.price}`

const link = `https://wa.me/2348088862697?text=${encodeURIComponent(wat)}`
  return (
    <div className='w-[350px] transform hover:scale-(1.05) transition duration-[0.6s] '>
      <Link to={`/product/${props.id}`}>
        {" "}
        <img src={props.image} alt='' className='h-[400px] object-cover' />
      </Link>
      <p className='mt-[6px] mb-[10px]'>{props.name}</p>
      <div className='flex gap-[20px]'>
        <div className='text-[#374151] text-[18px] font-[600]'>
          ${props.price}
        </div>
        {/* <div className='text-[#8c8c8c] text-[18px] font-[500] line-through'>
          $ {props.old_price}
          </div> */}
      </div>
          <a href={link} target='__blank' className='bg-black text-white w-full rounded-md mt-4 p-2'>Buy</a>
    </div>
  );
}
