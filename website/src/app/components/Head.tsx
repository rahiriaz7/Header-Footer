import React from 'react'
import Link from 'next/link'
const head = () => {
  return (
    <div>
        <header className="text-yellow-100 text-bold body-font">
  <div className="container flex flex-full-row mx-0 items-center bg-purple-800 px-9">
    <a className="flex title-font font-medium items-center text-yellow-400 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-15 text-blue-700 p-2 bg-yellow-500 rounded-auto" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-2xl text-red-600 text-bold">MAMTECH</span>
    </a>
    <nav className="md:ml-auto gap-5 flex flex-wrap items-center text-base justify-center">
      <div>
        <Link href="\">Home</Link>
      </div>
      <div>
        <Link href="name">Name</Link>
      </div>
      
      <div>
        <Link href="\name\microsoft">Microsoft</Link>
      </div>
      <div>
        <Link href="\name\microsoft\contact-me">Contact-me</Link>
      </div>
    </nav>
    <button className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-red-300 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default head