import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='bg-yellow-300'>
    <div className='text-2xl text-center text-bold bg bg to-blue-700'>Riaz Ahmad Arrain
        <div>
        Full Stack Web Developer
        </div>
    </div>
      <p>
        Bing AI Image Create
      </p>
    <div className="rounded-lg h-90 overflow-hidden">
    <Image className="object-cover object-center h-100 w-100" src="/bing.PNG" alt="" width={500} height={500}/>
    </div>
  </div>
  )
}

export default page