
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AllPatientHistory } from './pages/Doctor Dashboard/AllPatientHistory';
import { AddPatient } from './pages/Doctor Dashboard/AddPatient';
import { Landing } from './pages/Landing';
import { PatientProgress } from './pages/Doctor Dashboard/PatientProgress';
import { PatientHome } from './pages/Patient Dashboard/PatientHome';
import { ViewProgress } from './pages/Patient Dashboard/ViewProgress';


function App() {
  return (
    
    
<Routes>
    <Route exact path="/" element={<Landing/>}/>
    <Route exact path="/landing" element={<Landing/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/allpatienthistory" element={<AllPatientHistory/>}/>
    <Route exact path="/addpatient" element={<AddPatient/>}/>
    <Route exact path="/patientprogress" element={<PatientProgress/>}/>
        <Route exact path="/patienthome" element={<PatientHome/>}/>
        <Route exact path="/viewprogress" element={<ViewProgress/>}/>
        
</Routes>
    
   
  );
}

export default App;
