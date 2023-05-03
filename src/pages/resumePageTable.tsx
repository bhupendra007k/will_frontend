import React, { ReactElement } from 'react'
import Icons from 'components/resumePageLabels/resumePageIcons'
import { Table, Divider } from 'antd'

const columns = [
  {
    title: <p style={{ color: '#1D2E88', fontSize: '16px', margin: 'auto' }}>File Name</p>,
    dataIndex: 'FileName',
  },
  {
    title: <p style={{ color: '#1D2E88', fontSize: '16px', margin: 'auto' }}>Date </p>,
    dataIndex: 'date',
  },
  {
    title: <p style={{ color: '#1D2E88', fontSize: '16px', margin: 'auto' }}>Job Role</p>,
    dataIndex: 'JobRole',
  },
  {
    title: '',
    dataIndex: 'type',
  },
]

interface DataType {
  key: React.Key
  FileName: string | ReactElement
  date: string | ReactElement
  JobRole: ReactElement | string
  type: string | ReactElement
}

const data: DataType[] = [
  {
    key: '0',
    FileName: 'Resume for Graphics + UI/UX Designer',
    date: 'May 02, 2022',
    JobRole: 'UI/UX Designer',
    type: <Icons />,
  },
  {
    key: '1',
    FileName: 'Resume for Frontend + UI/UX Designer',
    date: 'Apr 09, 2022',
    JobRole: 'Frontend Designer',
    type: <Icons />,
  },
  {
    key: '2',
    FileName: 'Resume for UI/UX Designer',
    date: 'Apr 09, 2022',
    JobRole: 'UI/UX Designer',
    type: <Icons />,
  },
]

const Demo = () => {
  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          type: 'checkbox',
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  )
}

export default Demo
