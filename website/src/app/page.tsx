import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='bg bg-orange-300'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-blue-900 font-bold title-font text-3xl mb-2 sm:mb-0"> Create 3D Images from AI</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
        You will receive emails about Microsoft Rewards, which include offers about Microsoft and partner products. You will also receive notifications about Image Creator from Designer. By continuing, you agree to the Rewards Terms and Image Creator Terms below.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-auto">
      <div className="p-5 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-45 overflow-hidden">
          <Image className="object-cover object-center h-full w-full" src="/riaz.PNG" alt="" width={500} height={500}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">3D Image Generate AI</h2>
        <p className="text-base leading-relaxed mt-2"> Bing Image Creator is a free AI platform that lets you make an image by saying what you want. Powered by its advanced machine learning algorithm ...</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-50 overflow-hidden">
          <Image className="object-cover object-center h-full w-full" src="/riaz1.PNG" alt="" width={500} height={500}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5"> Bing 3D Image</h2>
        <p className="text-base leading-relaxed mt-2">
        Use Bing AI Image Creator on Android and iOS for Free · 1. Android and iPhone users can also generate images using Bing AI Image Creator. · 2. Next, tap on “Get ...
        </p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-45 overflow-hidden">
          <Image className="object-cover object-center h-full w-full" src="/riaz2.PNG" alt="" width={500} height={500}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5"> AI Prompt Image</h2>
        <p className="text-base leading-relaxed mt-2">
        create a 3D illusion for profile picture where a 22 years old boy sitting casually on a beast of throne chair.Wirh rifle on hand.And a ferocious lion both side. Wearing sneakers, they looks ahead in big and capital fonts golden neon light
        </p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default page