import React from 'react'
import { Table } from 'antd'

interface IProps {
  data: any
  columns: any
  onSelect?: () => void
}

const TableMain: React.FC<IProps> = ({ data, columns, onSelect }: IProps) => (
  <div onClick={onSelect}>
    <Table columns={columns} dataSource={data}></Table>
  </div>
)

export default TableMain
