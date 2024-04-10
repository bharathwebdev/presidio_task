import React from 'react'
import play  from '../assets/behance_assets/www_behance_net-17.svg'
function Status({imageUrl,name,live}) {
  return (
    <div className='flex flex-col justify-center items-center cursor-pointer'>
    <div className='relative'>
    <div className={`w-[60px] rounded-full border-2  p-[2px] ${live ? 'border-red-600':'border-blue-600'}`}>
        <img className='rounded-full' src={imageUrl}/>
     {live ?   <div className='absolute bottom-0 left-2.5 text-center w-[38px] text-white bg-red-600 text-[10px] font-[700] px-1 rounded'>LIVE </div>
     : <div className='absolute top-[80%] left-5 w-[23px] h-[17px] bg-white flex justify-center items-center rounded border-[1px]'>
      <img src={play} className='w-[9px]'/>
      </div>}
    </div>
   </div>
   <div className='text-[11px] mt-1 text-[#696969]'>{name}</div>
    </div>
  )
}

export default Status