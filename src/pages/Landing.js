import React from 'react'

import { Link } from 'react-router-dom'


export const Landing = () => {
  return (
    <div>
    <header class="text-gray-700 body-font border-b border-gray-200 ">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <p class=" ml-5 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="https://tailblocks.cc" target="_blank">
        logo
        <span class="ml-3 text-xl">App Name</span>
      </p>
    </div>
  </header>
  <section class="text-gray-700 body-font bg-blue-100">
    <div class="container flex px-5 mt-10 ml-10 py-24 md:flex-row flex-col items-center pl-5">
      <div class="lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start pl-5 md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class=" leading-normal title-font sm:text-6xl text-5xl mb-4 w-3/4 font-bold text-gray-900 ">Get clarity on irregular
        <h1 className='mt-4 '> heartbeats within minutes</h1>
        </h1>
        <p class="mb-8 mt-2 leading-relaxed text-xl text-gray-500">Get deep insights into changes in your heart health over time.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            <Link to='/login'>
            Get Started
            </Link></button>
        </div>
      </div>
      
    </div>
  </section>
  </div>
  )
}
