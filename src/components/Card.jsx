import React from 'react'
import like from '../assets/behance_assets/www_behance_net-23.svg'
import eye from '../assets/behance_assets/www_behance_net-24.svg'
import uiux from '../assets/behance_assets/ui-ux.png'
function Card({name,title,img,icon,likes,views,multipleOwner}) {
  return (
    <div className=''>

<div class='relative group cursor-pointer  '>
  <img class='w-[335px] h-[262px] rounded' src={img}/>
  <p class='absolute bottom-0 m-3 hidden group-hover:block text-[16px] font-[700] hover:underline text-white z-[100]'>{title}</p>
  <img src={uiux} className='transition-all duration-200 ease-in  h-0 w-[30px] opacity-0 group-hover:opacity-100 group-hover:h-[50px]  absolute top-0 right-2 '/>
  <div class='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-20'></div>
</div>

<div className='flex justify-between'>
<div className='flex items-center mt-2 gap-2 cursor-pointer '>
{!multipleOwner  && <img className='w-[25px] rounded-[50%] ' src={icon}/> }
<p className='font-[600] text-[12px] hover:underline'>{multipleOwner ? "Multiple Owners ":name}</p>
    </div>
    <div className='flex items-center gap-2 font-[700] text-[12px] cursor-pointer'>
        <div className='flex gap-1'> 
             <img src={like}/>
             <p>{likes}</p>
        </div>

        <div className='flex gap-1 font-[700] text-[12px] cursor-pointer'> 
             <img src={eye}/>
             <p>{views}</p>
        </div>

      

    </div>
</div>
    </div>
  )
}

export default Card