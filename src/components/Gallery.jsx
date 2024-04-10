import React from 'react'
import heart from "../assets/behance_assets/www_behance_net-21.svg"
import follow from "../assets/behance_assets/www_behance_net-22.svg"
import filter from "../assets/behance_assets/www_behance_net-20.svg"
import ImageList from './ImageList'
function Gallery() {
  return (
    <div className='mx-[24px] my-[40px]  '>
   
<div className='flex justify-between items-center  border-b-[1px] '>
  <div className='flex gap-7 justify-between items-center'>


    <div className='flex justify-center items-center gap-2 border-b-2 py-4 border-black cursor-pointer'>
        <img src={heart} className='w-[12px] h-[12px]'/>
        <div className='font-[600]'>For You </div>
    </div>


    <div className='w-[1px] h-[20px] bg-gray-200 '></div>

    <div className='flex justify-center items-center gap-2 h-full border-b-2 border-white hover:border-black py-4 cursor-pointer transition-all duration-300'>
        <img src={follow} className='w-[18px]'/>
        <div className='font-[600] text-[#707070]'>Following</div>
    </div>

  </div>

<div>
    <div className='flex justify-center items-center gap-2 border-[1px] w-[204px] h-[37px] p-1 rounded-full cursor-pointer hover:bg-[#f1eded] transition-all duration-400'>
        <img src={filter} className='w-[15px]'/>
        <div className='font-[600] text-[14px]'>Personalize Your Feed</div>
    </div>
</div>

</div>

<div>
   <ImageList/> 
</div>

    </div>
  )
}

export default Gallery