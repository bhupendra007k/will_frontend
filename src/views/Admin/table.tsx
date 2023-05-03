import React from 'react'
import { Table } from 'antd'
import { columns } from 'views/Admin/tableData'

interface IProps {
  onSelect: () => void
  data: any
  pagination: any
}

const TableMain = ({ onSelect, data, pagination }: IProps) => {
  return (
    <div>
      <Table
        onRow={() => {
          return {
            onClick: () => {
              onSelect()
            },
          }
        }}
        pagination={pagination}
        columns={columns}
        dataSource={data}
      ></Table>
    </div>
  )
}

export default TableMain
