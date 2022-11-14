import './App.css';
import RightPart from './pages/RightPart';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AllPatientHistory } from './pages/AllPatientHistory';
import { AddPatient } from './pages/AddPatient';
function App() {
  return (
    
    
<Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/allpatienthistory" element={<AllPatientHistory/>}/>
    <Route exact path="/addpatient" element={<AddPatient/>}/>
    <Route exact path="/" element={<RightPart/>}/>
</Routes>
    
   
  );
}

export default App;
