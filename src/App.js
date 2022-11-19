import './App.css';
import RightPart from './pages/RightPart';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AllPatientHistory } from './pages/AllPatientHistory';
import { AddPatient } from './pages/AddPatient';
import { Landing } from './pages/Landing';
import { PatientProgress } from './pages/PatientProgress';
function App() {
  return (
    
    
<Routes>
    <Route exact path="/" element={<Landing/>}/>
    <Route exact path="/landing" element={<Landing/>}/>
    <Route exact path="/login" element={<Login/>}>
      {

      }
      </Route>
    <Route exact path="/register" element={<Register/>}>
      {
        
      }
    </Route>
    <Route exact path="/allpatienthistory" element={<AllPatientHistory/>}/>
    <Route exact path="/addpatient" element={<AddPatient/>}/>
    <Route exact path="/patientprogress" element={<PatientProgress/>}/>
    <Route exact path="/logout">
      {
        
      }
    </Route>
</Routes>
    
   
  );
}

export default App;
