import React from 'react'
import { Column } from '@ant-design/plots'
import { data } from 'components/SalaryGraph/data'
function Graph() {
  const config = {
    data,
    xField: 'Salary',
    yField: 'type',
    color: '#1d2e88',

    xAxis: {
      label: {
        autoRotate: false,
      },
    },

    slider: {
      start: 0.1,
      end: 0.8,
    },
  }

  return (
    <div>
      <Column {...config} />
    </div>
  )
}

export default Graph
