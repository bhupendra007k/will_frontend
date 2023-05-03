import React from 'react'
import { Table } from 'antd'
import { columns } from 'views/Admin/dashboardTableData'

interface IPropsData {
  data: any
}
const TableDashboard = ({ data }: IPropsData) => (
  <div>
    <Table columns={columns} dataSource={data} />
  </div>
)

export default TableDashboard
