import React, {useState,useEffect} from 'react'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
// import LeftPart from '../../components/leftPart/LeftPart'
// import RightPart from './RightPart'
// import { BarChart } from '../../components/charts/BarChart'
import { Table } from '../../components/tables/Table'
import { LineChart } from '../../components/charts/LineChart'
import { useCookies } from 'react-cookie';

export const AllPatientHistory = () => {
  const [allrecords,setAllrecords] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies();
  const token = cookies.token
  const {REACT_APP_API_URL} = process.env;

  

  useEffect(() => {
    fetch(REACT_APP_API_URL+'/doctor/all-records',{
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
              setAllrecords(res.result)
             })
             .catch((err) => {
          console.log(err)
                console.log(err.message);
             });
    },[])


  return (
    <div className="App overflow-y-hidden ">
         <Header logout={()=>{removeCookie("token")
   removeCookie("user")}}/>
     <div className='w-full min-h-[90vh] grid grid-cols-12'>
     <NavBar/>
     <div className='grid grid-cols- col-span-10 w-full'>
      <LineChart/>
      <Table records={allrecords}/>
     </div>
     </div>
    </div>
  )
}
