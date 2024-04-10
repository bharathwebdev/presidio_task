import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function FooterComponent() {
  return (
    <div className='fixed px-[1.5rem] bottom-0  bg-white w-full flex items-center justify-between p-[0.3rem]'>
        <div className='flex items-center gap-[1rem]'>
        <div className='text-[0.7rem] text-[#696969] font-[500] p-[0.2rem]'>
            More Behance  <ArrowDropDownIcon color='#696969'/>
        </div>
        <div className='w-[1px] h-[20px] bg-gray-200 '></div>
        <div className='text-[0.7rem] text-[#696969] font-[500] p-[0.2rem]'>
            English <ArrowDropDownIcon color='#696969'/>
        </div>
        <div className='w-[1px] h-[20px] bg-gray-200 '></div>
        <div className='text-[0.7rem] text-[#696969] font-[500] p-[0.2rem]'>
            Try Behance Pro
        </div>
        <div className='w-[1px] h-[20px] bg-gray-200  '></div>
        <div className='text-[0.7rem] text-[#696969]  p-[0.2rem] hover:text-[#0057FF] font-[700]'>
            <a href="https://www.adobe.com/legal/terms.html">TOU</a>
        </div >
        <div className='text-[0.7rem] text-[#696969]  hover:text-[#0057FF] font-[700] p-[0.2rem]'>
            <a href='https://www.adobe.com/privacy.html'>Privacy</a>
        </div>
        <div className='text-[0.7rem] text-[#696969]  hover:text-[#0057FF] font-[700] p-[0.2rem]'>
            <a href='https://www.behance.net/misc/community'>Community</a>
        </div>
        <div className='text-[0.7rem] text-[#696969]  hover:text-[#0057FF] font-[700] p-[0.2rem]'>
        <a href='https://help.behance.net/hc/en-us'>Help</a>
        </div>
        <div className='text-[0.7rem] text-[#696969]  hover:text-[#0057FF] font-[700] p-[0.2rem]'>
        Cookie preferences
        </div>
        <div className='text-[0.7rem] text-[#696969]  hover:text-[#0057FF] font-[700] p-[0.2rem]'>
            <a href='https://www.adobe.com/privacy/us-rights.html'>Do not sell or share my personal information</a>
        </div>
        </div>
        <div>
        <button className='bg-white text-black rounded-full outline-none py-[0.4rem] px-[1rem] text-[0.9rem] font-[500] flex gap-[0.5rem] font-[600]'>
            <img width="20rem" src='https://cdn.iconscout.com/icon/free/png-256/adobe-254-761738.png' alt='pic'/>
            Abobe
            </button>         
        </div>
    </div>
  )
}

export default FooterComponent