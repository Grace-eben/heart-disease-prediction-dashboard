import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Header from '../components/header/Header'
import LeftPart from '../components/leftPart/LeftPart'
import RightPart from './RightPart'

export const AllPatientHistory = () => {
  return (
    <div className="App overflow-y-hidden ">
     <Header/>
     <div className='w-full min-h-[90vh] grid grid-cols-12'>
     <NavBar/>
     <div className='grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full'>
      <LeftPart/>
      <RightPart/>
     </div>
     </div>
    </div>
  )
}
