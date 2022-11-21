
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
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function App() {

  const [cookies, setCookie, removeCookie] = useCookies({});
  const token = cookies.token
  const user = cookies.user
console.log(token && user==="doctor")
  return (
    
    
<Routes>
    <Route exact path="/" element={<Landing/>}/>
    <Route exact path="/landing" element={<Landing/>}/>
    <Route exact path="/login" element={(token)? ((user==="doctor") ?<Navigate to="/addpatient"/> :<Navigate to="/patienthome"/>):<Login/>}/>
    <Route exact path="/register" element={(token)? <Navigate to="/login"/>:<Register/>} />
    <Route exact path="/allpatienthistory" element={(token)? ((user==="doctor")?<AllPatientHistory/>:<Navigate to="/login"/>):<Login/>}/>
    <Route exact path="/addpatient" element={(token)? ((user==="doctor")?<AddPatient/>:<Navigate to="/login"/>):<Login/>}/>
    <Route exact path="/patientprogress" element={(token)? ((user==="doctor")?<PatientProgress/>:<Navigate to="/login"/>):<Login/>}/>


    <Route exact path="/patienthome" element={(token)? ((user==="patient") ? <PatientHome/> :<Navigate to="/login"/>):  <Login/>}/>
    <Route exact path="/viewprogress" element ={(token)? ((user==="patient") ? <ViewProgress/> :<Navigate to="/login"/>):  <Login/>}/>
    <Route exact path="/logout" element={
   (removeCookie("token") || removeCookie("user")) ?
    <Navigate to="/login"/> : <Navigate to="/login"/>}/>
</Routes>
    
   
  );
}

export default App;
