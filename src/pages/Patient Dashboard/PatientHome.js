import React from "react";
import Header from "../../components/header/Header";
import { ProfileCard } from "../../components/cards/ProfileCard";
import { AboutPatient } from "../../components/cards/AboutPatient";
import { PatientHistoryCard } from "../../components/cards/PatientHistoryCard";
import PatientNavBar from "../../components/navbar/PatientNavBar";

import { Card } from "../../components/cards/Card";
import { useCookies } from 'react-cookie';
import { useEffect } from "react";
import { useState } from "react";



export const patientHistory = [
    {
      id: 0,
      title: "CP",
      value: "-",
      key:"cp"
    },
    {
        id: 1,
        title: "TrestBPS",
        value: "-",
        key: "trestbps"
      },
      {
        id: 2,
        title: "Fbs",
        value: "-",
        key: "fbs"
      },
      {
        id: 3,
        title: "Rest ECG",
        value: "-",
        key: "restecg"
      },
      {
        id: 4,
        title: "Thalach",
        value: "-",
        key: "thalach"
      },
      {
        id: 5,
        title: "Exang",
        value: "-",
        key: "exang"
      },
      {
        id: 6,
        title: "Old Peak",
        value: "-",
        key: "oldpeak"
      },
      {
        id: 7,
        title: "Slope",
        value: "-",
        key:"slope"
      },
  ];
  

export const PatientHome = () => {
const avgArray = ["cp","trestbps","fbs","restecg","thalach","exang","oldpeak","slope"]
  const [cookies, setCookie, removeCookie] = useCookies();
  const token = cookies.token
const [patientRecords,setRecords] = useState([])
const [patientAvg,setPatientAvg] = useState(patientHistory)
const [lastPred,setLastPred] = useState("loading")
const [nameObj,setNameObj] = useState({
  name:"name",
  email:"email",
  id:-1
})

const avgData ={
  "cp":0,
  "trestbps":0,
  "fbs":0,
  "restecg":0,
  "thalach":0,
  "exang":0,
  "oldpeak":0,
  "slope":0,
}

function computeRecordsAvg(){
  const len = patientRecords.length
  for (var obj of patientRecords){
   // console.log(obj)
    for(var key of avgArray){
      //console.log(avgData[key],obj[key],key)
      avgData[key] = avgData[key]+obj[key]
    }
  }
  //avg each
  for(var k of avgArray){
avgData[k] = avgData[k]/len;
  }
  // console.log(avgData)
  // console.log(patientAvg)

for(var k of avgArray){
  for(var obj of patientAvg){
    if(obj.key===k){
      obj.value=parseInt(avgData[k])
    }
  }
}
// console.log(patientAvg)
setPatientAvg(patientAvg)
}


useEffect(()=>{
  fetch('http://127.0.0.1:8000/patient/myinfo',{
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
  setNameObj(res.result[0])
  })
  .catch((err) => {
  console.log(err)
    console.log(err.message);
  });
},([]))

useEffect(()=>{
  fetch('http://127.0.0.1:8000/patient/my-records',{
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
setRecords(res.result)
})
.catch((err) => {
console.log(err)
  console.log(err.message);
});




},[])



useEffect(()=>{
  //console.log(avgData,"avgDAta")
  // setLastPred(patientRecords)
  if(patientRecords.length>0){
setLastPred(patientRecords[patientRecords.length-1].target)
  }else{
    setLastPred("-")
  }
  computeRecordsAvg()
},[patientRecords])

  
  return (
    <div className="App overflow-y-hidden ">
    <Header />
    <div className="w-full min-h-[90vh] grid grid-cols-12">
      <PatientNavBar />
      <div className="grid grid-cols- col-span-10 m-5 p-2">
      <div class="bg-gray-50 pb-5">
      <div class="flex flex-row mx-auto my-5 p-5 ">
        
       <ProfileCard obj={nameObj} />
       {/* <AboutPatient/> */}
       <Card score={lastPred+"%"} label="is your prediction score as per your last updated data." color="#9933ff" lastUpdated="Nov 19,2200"/>
        </div>
      <div className='flex flex-col  mx-10'>
      
      <h1 className='mt-5  text-2xl font-bold'>Medical Profile</h1>
     <PatientHistoryCard patientHistory={patientAvg}/>

      </div>
        </div>
        
        </div>
        </div>
        </div>
  );
};
