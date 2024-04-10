import React, { useState } from 'react'
import plus from '../assets/behance_assets/www_behance_net-26.svg'
import Status from './Status'
import data from './data/data'
import HashTag from './HashTag';
function Progress() {
    const [statusData,setdata] = useState(data);
    
  return (
    <div className='m-[24px]  w-[100%]'>
        <div className='text-[20px] font-[600]  tracking-[1px]'>
        Today's Work in Progress
        </div>

<div className='mt-9 flex gap-10 items-center overflow-scroll no-scrollbar'>

    <div className='w-[56px]'>
        <img src={plus} className='w-[56px]'/>
        <p className='text-[11px] mt-1 text-[#696969]'>Add Yours</p>
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
/>
  
{/* <HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
/>
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
/>
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
/> */}
{/* <HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
/>
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
/>
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
/>
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
/>
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
/>
<HashTag
imageUrl={"https://mir-s3-cdn-cf.behance.net/user/100/563ba6120301377.603eaf0ed9cd0.jpg"}
name={"videos"}
/> */}
</div>
    </div>
  )
}

export default Progress