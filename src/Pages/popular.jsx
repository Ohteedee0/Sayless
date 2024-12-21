import React from 'react'
import { data_products } from './products';
import Items from './items';
import items from './items';

export default function popular() {

 const popularItems =data_products.filter((items)=>items.category ==='Men')

  return (
    <div className='flex flex-col items-center gap-[10px] my-20 mb-2'>
      <h1 className='text-[#171717] lg:text-[50px]'>POPULAR IN MEN</h1>
      <hr className='w-[200px] h-[6px] rounded bg-[#252525]' />
      <div className='mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]'>
        {popularItems.map((items, i) => {
          return (
            <Items
              key={i}
              id={items.id}
              name={items.name}
              image={items.image}
              price={items.price}
            />
          );
        })}
      </div>
    </div>
  );
}
