import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Header from '../components/header/Header'
import LeftPart from '../components/leftPart/LeftPart'
import RightPart from './RightPart'
import { BarChart } from '../components/charts/BarChart'
import { Table } from '../components/tables/Table'
import { LineChart } from '../components/charts/LineChart'

export const AllPatientHistory = () => {
  return (
    <div className="App overflow-y-hidden ">
     <Header/>
     <div className='w-full min-h-[90vh] grid grid-cols-12'>
     <NavBar/>
     <div className='grid grid-cols- col-span-10 w-full'>
      <LineChart/>
      <Table/>
     </div>
     </div>
    </div>
  )
}
