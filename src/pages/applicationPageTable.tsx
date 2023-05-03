import React, { ReactElement } from 'react'
import CompanyName from 'components/ApplicantsPageComponent/Company'
import Contact from 'components/ApplicantsPageComponent/Contact'
import { Table, Divider } from 'antd'

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Date Applied',
    dataIndex: 'dateapplied',
  },
  {
    title: 'Company',
    dataIndex: 'company',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Postition',
    dataIndex: 'postition',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
]

interface DataType {
  key: React.Key
  id: string
  dateapplied: string | ReactElement
  company: ReactElement | string
  type: string | ReactElement
  postition: string | ReactElement
  contact: string | ReactElement
  status: string | ReactElement
}

const data: DataType[] = [
  {
    key: '0',
    id: '#APL-0003',
    dateapplied: <p style={{ color: '#828282' }}>June 1, 2020, 08:22 AM </p>,
    company: <CompanyName />,
    type: <p style={{ color: '#828282' }}>FREELANCE </p>,
    postition: <p style={{ color: '#828282' }}>Intern UI Designer </p>,
    contact: <Contact />,
    status: (
      <button
        style={{
          borderRadius: '25px',
          border: 'solid 1px black',
          minWidth: '97px',
          minHeight: '37px',
          background: 'none',
        }}
      >
        Pending
      </button>
    ),
  },
  {
    key: '1',
    id: '#APL-0002',
    dateapplied: <p style={{ color: '#828282' }}>June 1, 2020, 08:22 AM </p>,
    company: <CompanyName />,
    type: <p style={{ color: '#828282' }}>PART TIME </p>,
    postition: <p style={{ color: '#828282' }}>Junior UI Designer </p>,
    contact: <Contact />,
    status: (
      <button
        style={{
          borderRadius: '25px',
          border: 'solid 1px #F9C52B',
          color: '#F9C52B',
          minWidth: '97px',
          minHeight: '37px',
          background: 'none',
        }}
      >
        On-Hold
      </button>
    ),
  },
  {
    key: '2',
    id: '#APL-0003',
    dateapplied: <p style={{ color: '#828282' }}>June 1, 2020, 08:22 AM </p>,
    company: <CompanyName />,
    type: <p style={{ color: '#828282' }}>FREELANCE </p>,
    postition: <p style={{ color: '#828282' }}>Intern UI Designer </p>,
    contact: <Contact />,
    status: (
      <button
        style={{
          borderRadius: '25px',
          border: 'solid 1px black',
          minWidth: '97px',
          minHeight: '37px',
          background: 'none',
        }}
      >
        Pending
      </button>
    ),
  },
  {
    key: '3',
    id: '#APL-0001',
    dateapplied: <p style={{ color: '#828282' }}>June 1, 2020, 08:22 AM </p>,
    company: <CompanyName />,
    type: <p style={{ color: '#828282' }}>FULLTIME </p>,
    postition: <p style={{ color: '#828282' }}>Senior UX Designer </p>,
    contact: <Contact />,
    status: (
      <button
        style={{
          borderRadius: '25px',
          border: 'none',
          minHeight: '37px',
          minWidth: '97px',
          backgroundColor: '#22AB92',
          color: '#fff',
        }}
      >
        Shortlisted
      </button>
    ),
  },
  {
    key: '4',
    id: '#APL-0002',
    dateapplied: <p style={{ color: '#828282' }}>June 1, 2020, 08:22 AM </p>,
    company: <CompanyName />,
    type: <p style={{ color: '#828282' }}>PART TIME </p>,
    postition: <p style={{ color: '#828282' }}>Junior UI Designer </p>,
    contact: <Contact />,
    status: (
      <button
        style={{
          borderRadius: '25px',
          border: 'solid 1px #F9C52B',
          color: '#F9C52B',
          minWidth: '97px',
          minHeight: '37px',
          background: 'none',
        }}
      >
        On-Hold
      </button>
    ),
  },
  {
    key: '5',
    id: '#APL-0001',
    dateapplied: <p style={{ color: '#828282' }}>June 1, 2020, 08:22 AM </p>,
    company: <CompanyName />,
    type: <p style={{ color: '#828282' }}>FULLTIME </p>,
    postition: <p style={{ color: '#828282' }}>Senior UX Designer </p>,
    contact: <Contact />,
    status: (
      <button
        style={{
          borderRadius: '25px',
          border: 'none',
          minHeight: '37px',
          minWidth: '97px',
          backgroundColor: '#22AB92',
          color: '#fff',
        }}
      >
        Shortlisted
      </button>
    ),
  },
]

// rowSelection object indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
//   },
//     getCheckboxProps: (record: DataType) => ({
//       disabled: record.name === 'Disabled User', // Column configuration not to be checked
//       name: record.name,
//     }),
// }

const Demo = () => {
  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          type: 'checkbox',
          //   ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  )
}

export default Demo
