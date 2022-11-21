import React from 'react'
import Header from '../../components/header/Header'
import PatientNavBar from '../../components/navbar/PatientNavBar'
import { BarChart } from '../../components/charts/BarChart'

export const ViewProgress = () => {
  return (
    <div className="App overflow-y-hidden ">
    <Header/>
    <div className='w-full min-h-[90vh] grid grid-cols-12'>
   <PatientNavBar/>
    <div className='grid grid-cols-1 col-span-7 m-5 p-5 w-full'>
    <div class="mb-3 w-full ">
<h6 className='mb-3 font-bold'>Metric :</h6>
    <select class="form-select 
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    </div>
     <BarChart/>
    </div>
    </div>
   </div>
  )
}
