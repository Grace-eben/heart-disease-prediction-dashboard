import React from 'react'
import { AddPatientForm } from '../../components/forms/AddPatientForm'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'




export const AddPatient = () => {

  
  return (
    <div>
      <div className="overflow-y-hidden ">
     <Header/>
     <div className='w-full min-h-[90vh] grid grid-cols-12'>
     <NavBar/>
     <div className='grid grid-cols col-span-10 w-full'>
 
      <AddPatientForm/>
      
     </div>
    
     </div>
    </div>
    </div>
  )
}
