import React from 'react'
import { Link } from 'react-router-dom'

export const Radio = () => {

  return (
    <div>
           
<ul class="grid gap-6 w-full md:grid-cols-2 mt-10 ">
    <li>
    <Link to="/register">
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer"  required/>
        <label for="hosting-small" class="inline-flex justify-between content-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600  ">                           
            <div class="grid content-center">
                <div class="w-full text-lg font-semibold text-center ">
                    <img src="https://media.istockphoto.com/id/1028847418/vector/doctor-visit-with-patient-for-medicine-concept.jpg?s=612x612&w=0&k=20&c=0w5u7ShrukF7Jk_IgqBDRhW-3MfOJzuRurkIgSF9Wow=" width="150px" height="100px"/>
                </div>
                <div class="w-full">Patient</div>
            </div>
            
        </label>
        </Link>
    </li>
    <li>
        <Link to="/login">
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
        <label for="hosting-big" class="inline-flex justify-between content-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 ">
            <div class="grid content-center ">
                <div class="w-full text-lg font-semibold">
                    <img src="https://i.pinimg.com/736x/b5/75/7a/b5757a2eed2300820433e4083ae635c2.jpg" width="150px" height="100px" className='text-center'/>
                </div>
                <div class="w-full">Doctor</div>
            </div>
          
        </label>
        </Link>
    </li>
</ul>
    </div>
  )
}



