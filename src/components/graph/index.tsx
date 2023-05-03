import React from 'react'
import 'chartjs-plugin-datalabels'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options: any = {
  plugins: {
    legend: {
      display: false,
    },
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          display: false,
          beginAtZero: true,
        },
      },
    ],
  },
}
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const data: any = {
  labels,
  datasets: [
    {
      label: 'opening',
      data: ['66', '10', '5', '60', '100', '70', '15', '20', '90', '10', '80', '50', '70', '45', '10', '70'],
      backgroundColor: '#DCE2FF',
      hoverBackgroundColor: '#1D2E88',
      borderColor: 'none',
      borderRadius: '20',
      color: '#9CA3AF',
    },
  ],
}
export const BarChart = () => <Bar options={options} data={data} height={120} />
