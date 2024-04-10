import React from 'react'
import Card from './Card'
import { collection } from './data/data'
function ImageList() {
  return (
    <div className='flex flex-wrap gap-[1rem] mt-10  gap-y-[2rem]'>
      {collection.map(data=>{
        return <Card {...data}/>
      })}
        {collection.map(data=>{
        return <Card {...data}/>
      })}
    
    </div>
  )
}

export default ImageList