import React from "react";
import Header from "../../components/header/Header";
import { ProfileCard } from "../../components/cards/ProfileCard";
import { AboutPatient } from "../../components/cards/AboutPatient";
import { PatientHistoryCard } from "../../components/cards/PatientHistoryCard";
import PatientNavBar from "../../components/navbar/PatientNavBar";

import { Card } from "../../components/cards/Card";


export const PatientHome = () => {
  return (
    <div className="App overflow-y-hidden ">
    <Header />
    <div className="w-full min-h-[90vh] grid grid-cols-12">
      <PatientNavBar />
      <div className="grid grid-cols- col-span-10 m-5 p-2">
      <div class="bg-gray-50 pb-5">
      <div class="flex flex-row mx-auto my-5 p-5 ">
        
       <ProfileCard/>
       <AboutPatient/>
       <Card score="98%" label="is your prediction score as per your last updated data." color="#9933ff" lastUpdated="Nov 19,2200"/>
        </div>
      <div className='flex flex-col  mx-10'>
      
      <h1 className='mt-5  text-2xl font-bold'>Medical Profile</h1>
     <PatientHistoryCard/>

      </div>
        </div>
        
        </div>
        </div>
        </div>
  );
};
