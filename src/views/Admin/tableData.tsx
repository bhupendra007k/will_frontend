import type { ColumnsType } from 'antd/lib/table'
import { ReactChild } from 'react'

interface DataType {
  key: React.Key
  role: string
  profilePicture: any
  experience: string
  mobile: number
  mail: string
  src: ReactChild
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'Profile',
    dataIndex: 'profile',
    align: 'center',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    align: 'center',
  },
  {
    title: 'Experience',
    dataIndex: 'experience',
    align: 'center',
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    align: 'center',
  },
  {
    title: 'Mail-ID',
    dataIndex: 'mail',
    align: 'center',
  },
  {
    title: '',
    dataIndex: 'src',
    align: 'center',
  },
]
