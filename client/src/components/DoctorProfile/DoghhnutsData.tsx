import './style.css'
import React from 'react';
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);


const data = {
   
    datasets: [
        {
            data: [45, 30,25],
            backgroundColor: [
                'orange',
                'rgb(26, 88, 244)',
                'blueviolet'
            ],
            hoverBackgroundColor: [
                'orange',
                'rgb(26, 88, 244)',
                'blueviolet'
            ]
        }],
        labels: [],
  

};

function CreateDoughnutData() {
  return (
    <div className='DoctorProfile-donut' >
        <Doughnut data={data} />
    </div>
  );
}

export default CreateDoughnutData;