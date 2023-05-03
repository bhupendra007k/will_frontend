import type { ColumnsType } from 'antd/lib/table'
import { ReactChild } from 'react'
import { TableHeader, Image, Details, Dots } from 'styles/Table'
import Recuriter from 'assets/images/profileRecuriter.png'
import Recuriter2 from 'assets/images/profileRecuriter2.png'
import Recuriter3 from 'assets/images/profileRecuriter3.png'
import Recuriter4 from 'assets/images/profileRecuriter4.png'
import Dot from 'assets/images/threedots.png'

interface DataType {
  key: React.Key
  role: string
  profile: any
  experience: string
  mobile: string
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

export const data: DataType[] = [
  {
    key: '1',
    profile: (
      <TableHeader>
        <Image src={Recuriter} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: 'Lead Recruiter',
    experience: '5+ Years',
    mobile: '+91 12345 67890',
    mail: 'Custommail@mail.com',
    src: <Dots src={Dot} />,
  },
  {
    key: '2',
    profile: (
      <TableHeader>
        <Image src={Recuriter2} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: 'Sr. Recruiter',
    experience: '3+ Years',
    mobile: '+91 12345 67890',
    mail: 'Custommail@mail.com',
    src: <Dots src={Dot} />,
  },
  {
    key: '3',
    profile: (
      <TableHeader>
        <Image src={Recuriter3} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: 'Sr. Recruiter',
    experience: '3+ Years',
    mobile: '+91 12345 67890',
    mail: 'Custommail@mail.com',
    src: <Dots src={Dot} />,
  },
  {
    key: '4',
    profile: (
      <TableHeader>
        <Image src={Recuriter4} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: '3+ Years',
    experience: '1+ Years',
    mobile: '+91 12345 67890',
    mail: 'Custommail@mail.com',
    src: <Dots src={Dot} />,
  },
]
