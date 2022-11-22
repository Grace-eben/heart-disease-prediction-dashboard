import React from 'react'

export const Card = (props) => {
  return (
    <div>
         <div  class="block max-w-sm p-6 rounded-lg  mb-4 hover:bg-indigo-600 ml-5 " style={{backgroundColor: props.color}}>
    <h5 class="mb-3 text-6xl font-bold tracking-tight text-white ">{props.score}</h5>
    <p class="font-normal text-white mb-3">{props.label}</p>
</div>
    </div>
  
  )
}
