import React from 'react'

export const SelectionForms = ({patients,listX,listY,selectedX,selectedY,setPatient,setX,setY}) => {
  return (
    <div>

        <div >

  <div class="mb-3 w-full ">
<h6 className='mb-3 font-bold'>Patient ID:</h6>
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      
      onChange={(e)=>{
        setPatient(prev=>
          ({
            ...prev,
            id:e.target.value
          })
        )
      }} 
      >
        <option key='placeholder' value={null}>--Select--</option> 
         {
        patients.map((patient)=><option key={patient.id} value={patient.id}>{patient.name}-{patient.id}</option>)
       }
    </select>
    <h6 className='mb-3 mt-3 font-bold'>Select X-axis</h6>
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      onChange={(e)=>{
        setX(
            e.target.value
        )
      }} 
      >
          <option key='placeholder' value={null}>--Select--</option> 
         {
        listX.map((x)=><option key={x} value={x}>{x}</option>)
       }
    </select>
    <h6 className='mb-3 mt-3 font-bold'>Select Y-axis</h6>
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      onChange={(e)=>{
        setY(
            e.target.value
        )
      }} 
      >
          <option key='placeholder' value={null}>--Select--</option> 
         {
          listY.map((x)=><option key={x} value={x}>{x}</option>)
       }
    </select>
    
  </div>
</div>
    </div>
  )
}
