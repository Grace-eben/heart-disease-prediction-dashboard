import React from 'react'
import { AddPatientForm } from '../../components/forms/AddPatientForm'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import { useCookies } from 'react-cookie';



export const AddPatient = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  
  return (
    <div>
      <div className="overflow-y-hidden ">
      <Header logout={()=>{removeCookie("token")
   removeCookie("user")
   window.location.replace("/login")}}/>
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
