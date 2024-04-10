import React from 'react'
import like from '../assets/behance_assets/www_behance_net-23.svg'
import eye from '../assets/behance_assets/www_behance_net-24.svg'
function Card() {
  return (
    <div className=''>
<img className='w-[335px] h-[262px] rounded' src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/336c6a157572517.Y3JvcCwxMDgwLDg0NCwwLDExNw.jpg'/>
<div className='flex justify-between '>
    <div className='flex mt-2 gap-2'>
<img className='w-[25px] rounded-[50%] ' src='https://mir-s3-cdn-cf.behance.net/user/50/a629371037219.615b15a55808e.jpg'/>
<p className='font-[600]'>Funny pupy </p>
    </div>
    <div className='flex items-center gap-2 font-[700] text-[12px] cursor-pointer'>
        <div className='flex gap-1'> 
             <img src={like}/>
             <p>876</p>
        </div>

        <div className='flex gap-1 font-[700] text-[12px] cursor-pointer'> 
             <img src={eye}/>
             <p>8.4k</p>
        </div>



    </div>
</div>
    </div>
  )
}

export default Card