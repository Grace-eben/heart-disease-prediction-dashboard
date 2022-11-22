import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

export const LoginForm = () => {

  const [cookies, setCookie, removeCookie] = useCookies([]); 
const [email,setEmail] = useState()
const [password,setPass] = useState() 
const [user,setUser] = useState('doctor')	
const doc_email = "vini@gmail.com"
const doc_password = '123456'
const pat_email = "a@g"
const pat_password = '124'

const navigate=useNavigate()

  const {REACT_APP_API_URL} = process.env;


const loginHandler = () =>{
if (email && password && user){
  var url = REACT_APP_API_URL+"/"+user+"/login"
  fetch(url,{
    method:'POST',
    body:JSON.stringify({
      email:email,
      password:password
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
   },
  }) .then((res) => res.json())
  .then((res) => {
    
   if(res.message==="SUCCESS"){
    let expires = new Date()
    expires.setTime(expires.getTime() + (6000 * 1000))
    const token = res.result[0].token
    //document.cookie = "token = "+token
    setCookie("token",token)
    setCookie("user",user)
    alert("Login success!")
    window.location.replace("/login")
    //navigate("/login")
    //navigate(user==="patient"? "/patienthome": "/addpatient")
   }
   //setPatients(res.result)
  })
  .catch((err) => {
alert("Error occurred")
  });
}
else{
  alert("fill all the values!")
}
}



  const userSelectHandler =e=>{
    setUser(e.target.value)
    console.log(e.target.value)
  }


  const submitHandler = (event) => {
	event.preventDefault();
	navigate(user==="Patient"? "/patienthome": "/addpatient")

  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url("https://i.pinimg.com/736x/fc/17/f5/fc17f5bb9d4aea4510175a1a55609e4b.jpg")`,
              }}
            ></div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none ml-5">
              <h3 className="px-8 pt-4 text-2xl font-bold ">
                Login to your account!
              </h3>
              <div
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                <div className="mt-2 mb-3">
                  <ul className="grid grid-cols-3 gap-x-1 m-10 max-w-md mx-auto">
                    <li className="relative">
                      <input
                        className="sr-only peer"
                        type="radio"
                        value="doctor"
                        name="answer"
                        id="doctor"
                        checked={user==='doctor'}
                        onChange={(e)=>{
                          userSelectHandler(e)
                      
                        }}
					
                      />
                      <label
                        className="flex p-2 bg-white border border-gray-300 rounded-lg cursor-pointer border-2 border-blue-500 text-blue-500 font-semibold focus:outline-none hover:bg-gray-50  peer-checked:bg-blue-500 peer-checked:text-white  peer-checked:border-transparent checked"
                        for="doctor"
                      >
                        Doctor
                      </label>
                    </li>

                    <li className="relative">
                      <input
                        className="sr-only peer"
                        type="radio"
                        value="patient"
                        name="answer"
                        id="patient"
                        placeholder={user=='doctor'?doc_password:pat_password}
                        checked={user==='patient'}
						onChange={(e)=>{
							userSelectHandler(e)
					
						}}
                      />
                      <label
                        className="flex p-2 bg-white border border-gray-300 rounded-lg cursor-pointer border-2 border-blue-500 text-blue-500 font-semibold focus:outline-none hover:bg-gray-50  peer-checked:bg-blue-500 peer-checked:text-white  peer-checked:border-transparent"
                        for="patient"
                      >
                        Patient
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="username"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    required
                    value={email}
                    placeholder={user==='doctor'?"vini@gmail.com":"a@g"}
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    required
                    value={password}
                    placeholder={user==='doctor'?"123456":"124"}
                    onChange={(e)=>{setPass(e.target.value)}}
                  />
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <div className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                    <Link to="/register">Create an Account!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
