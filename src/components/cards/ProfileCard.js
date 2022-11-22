import React from 'react'

export const ProfileCard = ({obj}) => {
  return (
    <div>
        
        <div class="w-full mx-2 px-4">
         
         <div class="bg-white p-3 border-t-4 border-green-400">
             <div class="image overflow-hidden">
                 <img class="h-auto w-full mx-auto"
                     src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                     alt=""/>
             </div>
             <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{obj.name}</h1>
             <h3 class="text-gray-500 text-sm text-semibold leading-6">{obj.email}</h3>
             
             <ul
                 class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                 <li class="flex items-center py-3">
                     <span>Patient ID</span>
                     <span class="ml-auto"><span
                             class="ml-auto">{obj.id}</span></span>
                 </li>
             </ul>
         </div>
 </div>
    </div>
  )
}
