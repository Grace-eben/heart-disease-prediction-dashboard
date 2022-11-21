import React, { useState, useEffect } from 'react'
// import { PredictionModal } from '../modals/PredictionModal';
// import 'react-responsive-modal/styles.css';
import { useCookies } from 'react-cookie';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';



export const AddPatientForm = () => {
const percentage = 90;
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false)};
  setTimeout(() => onCloseModal(), 8000)
   
  const [cookies, setCookie, removeCookie] = useCookies();   
  const [patients,setPatients] = useState([]);
  const token = cookies.token
  const user = cookies.user
  const [record,setRecord] = useState({})

const [predictClicked,setPredictClick]= useState(false)
  function PredictHandler(){
    
    if (Object.keys(record).length == 14){
       fetch('http://127.0.0.1:8000/patient/predict',{
        method:'POST',
        body:JSON.stringify(record),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
      }) .then((res) => res.json())
      .then((res) => {
       console.log(res)
       setPatients(res.result)
      })
      .catch((err) => {
   console.log(err)
         console.log(err.message);
      });
    }
    else{
      console.log('fill all values!')
    }
     
  }

//console.log(cookies)
  useEffect(() => {
    fetch('http://127.0.0.1:8000/doctor/get-patients',{
                method: 'POST',
             body: JSON.stringify({
                token:token
             }),
             headers: {
                'Content-type': 'application/json; charset=UTF-8',
             },
          })
             .then((res) => res.json())
             .then((res) => {
              console.log(res)
              setPatients(res.result)
             })
             .catch((err) => {
    			console.log(err)
                console.log(err.message);
             });
    },[])



    // useEffect(()=>{
    //   console.log(record)
    // },[record])
  return (

    <div className='grid grid-cols-2 col-span-10'>
     
        <div class="w-full max-w-xl m-5">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Patient ID
      </label>
      <select onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
            id:e.target.value
          })
        )
      }} 
      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
       <option key='placeholder' value={null}>--Select--</option> 
       {
        patients.map((patient)=><option key={patient.id} value={patient.id}>{patient.name}-{patient.id}</option>)
       }
        </select>
     
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Age
      </label>
      <input 
      placeholder='Eg. 65'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
          age:parseInt(e.target.value)
          })
        )
      }}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" min="0" max="90" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Sex
      </label>
      <input 
      placeholder='0-Male, 1-Female'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
          sex:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" />
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
       Cp
      </label>
      <input 
      placeholder='0-3'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
          cp:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      Trestbps
      </label>
      <div className="relative">
      <input 
      placeholder='Avg. 140'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
          trestbps:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number"/><div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
       Cholestrol
      </label>
      <input 
      placeholder='Eg. 256'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
            chol:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3" for="grid-last-name">
      Fbs
      </label>
      <input 
      placeholder='0,1'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
            fbs:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Rest Ecg
      </label>
      <input 
      placeholder='0,1'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
            restecg:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" />
      
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
      Thalach
      </label>
      <input 
      placeholder='100-210'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
            thalach:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3" for="grid-last-name">
     Exang
      </label>
      <input 
      placeholder='0,1'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
            exang:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-5">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
      Old Peak
      </label>
      <input 
      placeholder='0-6.2'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
            oldpeak:parseFloat(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" />
    </div>
    <div className="w-full md:w-1/2 px-3 mt-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3" for="grid-last-name">
    Slope
      </label>
      <input 
      placeholder='0-2'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
            slope:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
    </div>
    <div className="w-full md:w-1/2 px-3 mt-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3" for="grid-last-name">
    Ca
      </label>
      <input 
      placeholder='0-4'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
            ca:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
    </div>
    <div className="w-full md:w-1/2 px-3 mt-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3" for="grid-last-name">
     Thal
      </label>
      <input 
      placeholder='1,2,3'
      onChange={(e)=>{
        setRecord(prev=>
          ({
            ...prev,
            thal:parseInt(e.target.value)
          })
        )
      }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
    </div>
    
   
    <button type="submit" onClick={()=>{PredictHandler(); onOpenModal()}} className=" ml-2  mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Predict
</button>


  </div>
</div>

<div className="w-full md:w-1/4 px-5 mt-8 content-center">

<CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  strokeWidth={5}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '20px',

    pathTransitionDuration: 0.5,

    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}

  />
</div>

</div>


   
  )
}
