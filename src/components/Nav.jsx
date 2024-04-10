import React, { useEffect, useState } from 'react'
import Logo from '../assets/behance_assets/www_behance_net-1.svg';
import searchLogo from '../assets/behance_assets/www_behance_net-4.svg'
import message from '../assets/behance_assets/www_behance_net-13.svg'
import bell from '../assets/behance_assets/www_behance_net-14.svg'
import Adobe from '../assets/behance_assets/www_behance_net-15.svg'
import arrow from '../assets/behance_assets/www_behance_net-3.svg'
import SearchFilterCard from './card/SearchFilterCard';
import { searchType } from './data/data';
import { document } from 'postcss';
import axios from 'axios';
function Nav() {
const [inputFocused,setInputFocused] = useState(false);
const [value,setValue] = useState("");
const [suggest,setSuggest] = useState([]);
  const changeFocusState =()=>{
    setInputFocused(pre=>!pre)
  }

  const handleInputChange = (e)=>{
  console.log("test"+ e.target.value)

  let timeout  =  setTimeout(()=>{
    setValue(e.target.value);


    axios.get(`https://api.datamuse.com/words?sp=${e.target.value}*`)
    .then(res=>{
        const firstFive = res.data.slice(0, 5);
        //console.log(firstFive)
       setSuggest(firstFive);
    })
  },1000)

  return ()=>{
    clearTimeout(timeout)
  }

  
}

const highlightLetter = (word) => {
  const letters = word.split('');
  return letters.map((letter, index) => {
      
   return  <span key={index} style={{ color: value.includes(letter) ? 'black' : '#696969' }}>
      {letter}
    </span> }
)
};


  return (
    <div className='h-[55px] z-[50] sticky top-0 bg-white  px-[24px] flex border-b-[1px] font-[600] text-[16px]'>
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
        <div className='w-[34px] h-[18px]  flex justify-center items-center text-[10px] text-center rounded-md  text-white text-center ' style={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,138,164,1) 0%, rgba(0,54,255,1) 13%, rgba(5,5,133,1) 100%)"}}>
         PRO
        </div>
      </div>

      <div className='w-[1px] h-[20px] bg-gray-200 '></div>

      <div className='w-[150px] h-full  flex items-center border-b-2 border-white  hover:border-b-2 hover:border-black transition-all duration-150 cursor-pointer'>
        <p className='w-full'>Hire Freelancers</p>

      </div>


        <div className='z-[1000]'>
<div style={{borderRadius:inputFocused && "20px 20px 0 0 "}} className={`flex  rounded-full   border-0 h-[32px] ${inputFocused ? 'self-end justify-self-start bg-white overflow-scroll  shadow-lg ':'rounded-full border-[1px]' }  p-1 w-[377px] bg-[#F9FAFE]  cursor-pointer  group  `}>
<img src={searchLogo} className='w-[30px] h-[30] mx-[2px] p-[2px] text-[#F9FAFE] bg-transparent'/>
          <input placeholder='Search...' className='w-[329px] font-[300] text-[15px] outline-none bg-transparent' onFocus={changeFocusState} onBlur={changeFocusState} onChange={handleInputChange}/>
    
</div>
{inputFocused && <div className='absolute bg-white   w-[377px]  shadow-lg ' style={{borderRadius:"0 0 20px 20px "}}>
  <div className='mx-10 my-3'>
  <div className='text-[12px] text-gray-600 font-[700]'>
{suggest.length>0 && value!="" ?   "PROJECTS" :"SUGGESTED SEARCHES"}
     </div>
     <ul className='font-[700] flex flex-col gap-2 mt-2 text-[20px]'>
      { value !="" ?
        suggest.map(data=>{
          return       <li>{highlightLetter(data.word)}</li>
        }) : ""
      }
     </ul>

</div>
<hr/>
<div className='mx-10 my-3'>
<div className='text-[12px] text-gray-600 font-[700]'>
SORT & FILTER ALL:
     </div>
     <div className='flex flex-col gap-[1rem] my-[1.5rem]'>
               {
                searchType.map(data=>{
                    return <SearchFilterCard {...data}/>
                })
               }
                </div>
  </div>
</div>

}
       
        </div>


      <div className='rounded-full border-[1px] h-[34px] w-[150px] flex justify-center items-center cursor-pointer cursor-pointer hover:bg-[#f1eded] transition-all duration-400'>
          <p className='text-[14px] font-[600] text-[#191919] mx-3'>Share your Work</p>
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
  {inputFocused &&  <div className='fixed top-0 z-[20]  left-0 right-0 w-[100vw] h-[100vh] inset-0 bg-gradient-to-t from-black to-black opacity-50'></div>}
    </div>
  )
}

export default Nav