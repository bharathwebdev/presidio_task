import React from 'react'
import Logo from '../assets/behance_assets/www_behance_net-1.svg';
import searchLogo from '../assets/behance_assets/www_behance_net-4.svg'
import message from '../assets/behance_assets/www_behance_net-13.svg'
import bell from '../assets/behance_assets/www_behance_net-14.svg'
import Adobe from '../assets/behance_assets/www_behance_net-15.svg'
import arrow from '../assets/behance_assets/www_behance_net-3.svg'
function Nav() {
  return (
    <div className='h-[55px]  sticky top-0 bg-white z-[10] px-[24px] flex border-b-[1px] font-[600] text-[16px]'>
      <div className='flex items-center gap-6  '>

      <img src={Logo} className='h-[15px] w-[82px] cursor-pointer'/>
      <div className='flex items-center gap-2 w-[72px] h-full border-b-2 border-black cursor-pointer'>
        <p className='text-[16px]'>Explore</p>
       <img src={arrow} className='w-[6px]  rotate-[270deg]'/>
      </div>

      <div className='h-full flex justify-center border-b-2 border-white items-center hover:border-b-2 hover:border-black transition-all duration-150 cursor-pointer'>
        <p>Assets</p>
      </div>

      <div className='h-full flex justify-center  items-center border-b-2 border-white  hover:border-b-2 hover:border-black transition-all duration-150 cursor-pointer'>
        <p>Jobs</p>
      </div>

      <div className='flex justify-center items-center w-[106px] h-[20px] gap-1 h-full border-b-2 border-white  hover:border-b-2 hover:border-black transition-all duration-150 cursor-pointer'>
        <div>Behance
          
        </div>
        <div className='w-[34px] h-[18px]  flex justify-center items-center text-[10px] text-center rounded-md bg-[rgb(0,89,254)] text-white text-center '>
         PRO
        </div>
      </div>

      <div className='w-[1px] h-[20px] bg-gray-200 '></div>

      <div className='w-[150px] h-full  flex items-center border-b-2 border-white  hover:border-b-2 hover:border-black transition-all duration-150 cursor-pointer'>
        <p className='w-full'>Hire Freelancers</p>

      </div>


        <div className='flex  border-[1px] h-[32px] rounded-full p-1 w-[377px] bg-[#F9FAFE] mx-[20px] cursor-pointer'>
          <img src={searchLogo} className='w-[30px] h-[30] mx-[2px] p-[2px] text-[#F9FAFE] bg-transparent'/>
          <input placeholder='Search...' className='w-[329px] font-[300] text-[15px] outline-none bg-transparent'/>
        </div>


      <div className='rounded-full border-[1px] h-[34px] w-[147px] flex justify-center items-center cursor-pointer'>
          <p className='text-[14px] font-[600] text-[#191919]'>Share your Work</p>
      </div>
      <div className='cursor-pointer'>
        <img src={message} className='w-[17px]'/>
      </div>
      <div className='cursor-pointer'>
        <img src={bell} className='w-[17px]'/>
      </div>
      <div className='cursor-pointer'>
        <img src="https://pps.services.adobe.com/api/profile/image/default/bb99dbb8-eab4-438d-ab41-f2f9f1b8ead3/100" className='w-[25px]'/>
      </div>

      <div className='cursor-pointer'>
        <img src={Adobe} className=' h-[16px] '/>
      </div>
      </div>
   
    </div>
  )
}

export default Nav