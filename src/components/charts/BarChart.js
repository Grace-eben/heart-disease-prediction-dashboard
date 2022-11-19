import React from 'react'
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export const BarChart = ({labels,label,data}) => {

    console.log("labels ",labels)
    console.log("data",data)
const state = {
    labels:labels,
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: data
      }
    ]
  }

  return (
    <div>
         <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        

    </div>
  )
}
