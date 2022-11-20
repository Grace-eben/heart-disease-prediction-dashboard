import React from 'react'
import Header from '../../components/header/Header'
import NavBar from '../../components/navbar/NavBar'
import { BarChart } from '../../components/charts/BarChart'
import SelectionForms from '../../components/forms/SelectionForms'


export const PatientProgress = () => {
  return (
    <div className="App overflow-y-hidden ">
     <Header/>
     <div className='w-full min-h-[90vh] grid grid-cols-12'>
     <NavBar/>
     <div className='grid grid-cols-1 col-span-7 m-5 p-5 w-full'>
        <SelectionForms/>
      <BarChart/>

     </div>
     </div>
    </div>
  )
}
