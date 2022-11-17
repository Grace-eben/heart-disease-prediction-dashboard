import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterForm = () => {

    const submitHandler=()=>{

    }
  return (
    <div>
        <div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
			
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
				
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style={{ 
                            backgroundImage: `url("https://media.istockphoto.com/id/1439544228/photo/stethoscope-on-electrocardiogram.jpg?b=1&s=170667a&w=0&k=20&c=369_DS-jPBBIKzFmVFfejh1uB-FKtpYbHASRw9SnDso=")` 
                          }}
					></div>
				
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Login to your account </h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={submitHandler}>
            <div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Name
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									
								required/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Email Address
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									
								required/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									
								required/>
								
							</div>
							
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
                                    <Link to="/login">
Register
                                    </Link>
								
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<div
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									
								>
                                    <Link to ="/login">
									Login to an existing account?
                                    </Link>
								</div>
							</div>
							
						</form>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
