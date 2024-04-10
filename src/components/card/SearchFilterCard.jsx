import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import arrow from "../../assets/behance_assets/www_behance_net-3.svg"
function SearchFilterCard({icons,sItems}) {
  return (
    <div className='flex justify-between items-center border-[1px]  p-[1rem] transition-all duration-300 rounded-lg  cursor-pointer hover:bg-gray-100'>
        <div className='flex  gap-[1rem] items-center'>
        <img src={icons} className='w-[20px]'/>
    <p className='font-[600] text-[14px]  hover:border-red'>{sItems}</p>
        </div>
   
    <div className=''>
    <img src={arrow} className='w-[6px] rotate-[180deg]'/>
    </div>

    </div>
  )
}

export default SearchFilterCard