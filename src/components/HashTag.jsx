import React from 'react';
import play from "../assets/behance_assets/whiteplay.svg";
import hashtag from "../assets/behance_assets/www_behance_net-18.svg";

function HashTag({ imageUrl, name, action }) {
  return (
    <div className='flex items-center mr-[7rem] cursor-pointer '>
      <div className='relative'>
        <div className=''>
          <div className={`w-16 h-16 relative rounded-full border-2  border-blue-600  p-[2px]  bg-white `}>
            <img className='rounded-full  relative' src={imageUrl} />
            <div className='bg-gradient-to-t from-black w-[52px] h-[52px] to-black  opacity-50 absolute w-full h-full top-1 left-1 rounded-full'></div>
            <img src={action ? play : hashtag} className='w-[20px] z-[100] absolute top-5 left-5' />
          </div>
          <div className='z-[-1] w-[180px] h-[60px] rounded flex absolute top-2 left-0'>
            <img className='w-[60px] h-[50px] rounded-l-full' src='https://mir-s3-cdn-cf.behance.net/4a246eaa20a5e83428f993e1c0d39ad0/92cf2c9e-9bbf-4b48-9d6f-c05081ca3883_acc_120x120.jpg?h=523f368a31dd673b16c7653645d772d1' />
            <img className='w-[60px] h-[50px]' src='https://mir-s3-cdn-cf.behance.net/908961d1520294e595a51736e1cde349/0bcfb141-d866-4cc2-ae28-70581c477166_rwc_631x481x1065x1901x120.jpg?h=e3d00def02ca59f9277f0cd1dac6565c' />
            <img className='w-[60px] h-[50px] rounded-r-md' src="https://mir-s3-cdn-cf.behance.net/acd02f8ee4f1fcda73256f847ec7633f/a1750e7e-a131-43ed-ba24-373a4bd2a2c0_rwc_0x0x840x1500x120.jpg?h=d82bab8b804ca51d412d5616dbee8980" />
          </div>
        </div>
        <div className='text-[11px] text-[#696969] text-center'>{name}</div>
      </div>
    </div>
  );
}

export default HashTag;
