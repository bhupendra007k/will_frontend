import React from 'react'
import { Table } from 'antd'
import { columns, data } from 'components/PreOnBoarding/startTableData'

const TableMain: React.FC = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default TableMain
