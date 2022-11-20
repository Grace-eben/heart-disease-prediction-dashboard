import React from 'react'
import { patientHistory } from './utils/PatientProgressDB'

export const PatientHistoryCard = () => {
	const random = () => (Math.floor(Math.random() * 255));

  return (
	<div  class="mt-5 ">
	<div class="rounded-lg">
		<dl class="grid grid-cols-2 gap-3  text-gray-900 sm:grid-cols-3 xl:grid-cols-4 ">
			{   
           patientHistory.map((item,index)=>{
                return(
                    <div key={index} class="flex flex-col items-center justify-center">
						<div className=' bg-white rounded-md px-10 py-5 border-2 w-full' style={{border:`2px solid rgb(${random()}, ${random()}, ${random()})`}}>
						<dt class="mb-2 text-3xl font-extrabold">{item.value}</dt>
				<dd class="font-light text-gray-500 dark:text-gray-600">{item.title}</dd>
						</div>
				
			</div>
                )    })
            }
			
		</dl>
	</div>
	</div>
  )
}
