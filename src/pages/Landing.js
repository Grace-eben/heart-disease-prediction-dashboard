import React from 'react'
import { Radio } from '../components/buttons/Radio'


export const Landing = () => {
  return (
    <div class="flex flex-col h-screen my-auto items-center">
    <div class="text-center mt-10">
        <h1 className='text-3xl font-bold mt-5'>Login to your account</h1>
        <Radio/>
    </div>
    </div>
  )
}
