import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const RegisterForm = () => {
	const [name,setName] = useState()
	const [email,setEmail] = useState()
	const [password,setPassword] = useState()
	let navigate = useNavigate();
	const {REACT_APP_API_URL} = process.env;

    const submitHandler=()=>{

if (name && email && password){
	fetch(REACT_APP_API_URL + "/patient/register",
{
	method:'POST',
	body:JSON.stringify({
		name:name,
		email:email,
		password:password
	}),
	headers: {
	  'Content-type': 'application/json; charset=UTF-8',
   },
}).then((res) => res.json())
.then((res) => {
	console.log(res)
	if(res.message === 'success'){
		alert("Registration success")
		navigate("/login");
	}
	else{
		alert("registration failed")
	}
   })
   .catch((err) => {
console.log(err)
	  console.log(err.message);
   });
}

    }
  return (
    <div>
        <div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
			
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
				
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style={{ 
                            backgroundImage: `url("https://png.pngtree.com/background/20210717/original/pngtree-blue-healthcare-abstract-background-picture-image_1441119.jpg")` 
                          }}
					></div>
				
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none ml-5">
						<h3 class="pt-4 text-3xl mt-4 p-5 font-bold">Create a Patient Account </h3>
						<div class="px-8 pt-6 pb-8 mb-4 bg-white rounded" >
            <div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Name
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									value={name}
									onChange={((e)=>{
									setName(e.target.value)
									})}
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
									value={email}
									onChange={((e)=>{
									setEmail(e.target.value)
									})}
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
									value={password}
									onChange={((e)=>{
									setPassword(e.target.value)
									})}
								required/>
								
							</div>
							
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
									onClick={submitHandler}
								>
                                
Register
								
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
							
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
