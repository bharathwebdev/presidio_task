import React, { useState } from 'react'
import plus from '../assets/behance_assets/plus4.png'
import Status from './Status'
import data from './data/data'
import HashTag from './HashTag';

function Progress() {
    const [statusData,setStatusData] = useState(data);
    
  return (
    <div className='m-[24px] z-[1000]'>
        <div className='text-[20px] font-[600]  tracking-[1px]'>
        Today's Work in Progress
        </div>

<div className='w-full overflow-scroll no-scrollbar min-w-[100px] '>
<div className='mt-9 flex gap-10 items-center  '>

    <div className='w-[56px] cursor-pointer'>
      <div className='bg-[#0057FF] p-4 rounded-full'>
      <img src={plus} className='w-[56px]'/>
      </div>
        
        <p className='text-[11px] mt-1 text-[#696969] w-[56px]'>Add Yours</p>
    </div>


{

statusData.map(data=>{
        const {imageUrl,live,name} = data;
        return <div>
  <Status 
       imageUrl={imageUrl}
       name={name}
       live={live}
       />
            </div>
    })
}


<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
action="video"
/>
  
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"#motion"}
/>
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"#photography"}
/>

<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"#illustration"}
/>
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
/>
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"#graphicdesign"}
/>

</div>
</div>
    </div>
  )
}

export default Progress