import type { ColumnsType } from 'antd/lib/table'
import { ReactChild } from 'react'
import Recuriter from 'assets/images/profileRecuriter.png'
import Recuriter2 from 'assets/images/profileRecuriter2.png'
import Recuriter3 from 'assets/images/profileRecuriter3.png'
import Recuriter4 from 'assets/images/profileRecuriter4.png'
import Dot from 'assets/images/threedots.png'

import { TableHeader, Image, Details, Dots } from 'styles/Table'
interface DataType {
  key: React.Key
  role: string
  candidate: any
  recuriter: any
  experience: string
  mobile: string
  interviewer: any
  src: ReactChild
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'Candidate',
    dataIndex: 'candidate',
    align: 'center',
  },
  {
    title: 'Job Role',
    dataIndex: 'role',
    align: 'center',
  },
  {
    title: 'Experience',
    dataIndex: 'experience',
    align: 'center',
  },
  {
    title: 'Contact',
    dataIndex: 'mobile',
    align: 'center',
  },
  {
    title: 'Recuriter',
    dataIndex: 'recuriter',
    align: 'center',
  },
  {
    title: 'Interviewer',
    dataIndex: 'interviewer',
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
    candidate: (
      <TableHeader>
        <Image src={Recuriter} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: 'Lead Recruiter',
    experience: '5+ Years',
    mobile: '+91 12345 67890',
    recuriter: (
      <TableHeader>
        <Image src={Recuriter} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={Recuriter3} />
        <Details>Wade Deo</Details>
      </TableHeader>
    ),
    src: <Dots src={Dot} />,
  },
  {
    key: '2',
    candidate: (
      <TableHeader>
        <Image src={Recuriter2} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: 'Sr. Recruiter',
    experience: '3+ Years',
    mobile: '+91 12345 67890',
    recuriter: (
      <TableHeader>
        <Image src={Recuriter} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={Recuriter3} />
        <Details>Wade Deo</Details>
      </TableHeader>
    ),
    src: <Dots src={Dot} />,
  },
  {
    key: '3',
    candidate: (
      <TableHeader>
        <Image src={Recuriter3} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: 'Sr. Recruiter',
    experience: '3+ Years',
    mobile: '+91 12345 67890',
    recuriter: (
      <TableHeader>
        <Image src={Recuriter} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={Recuriter3} />
        <Details>Wade Deo</Details>
      </TableHeader>
    ),
    src: <Dots src={Dot} />,
  },
  {
    key: '4',
    candidate: (
      <TableHeader>
        <Image src={Recuriter4} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: '3+ Years',
    experience: '1+ Years',
    mobile: '+91 12345 67890',
    recuriter: (
      <TableHeader>
        <Image src={Recuriter} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={Recuriter3} />
        <Details>Wade Deo</Details>
      </TableHeader>
    ),
    src: <Dots src={Dot} />,
  },
  {
    key: '5',
    candidate: (
      <TableHeader>
        <Image src={Recuriter} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: 'Lead Recruiter',
    experience: '5+ Years',
    mobile: '+91 12345 67890',
    recuriter: (
      <TableHeader>
        <Image src={Recuriter} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={Recuriter3} />
        <Details>Wade Deo</Details>
      </TableHeader>
    ),
    src: <Dots src={Dot} />,
  },
  {
    key: '6',
    candidate: (
      <TableHeader>
        <Image src={Recuriter2} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: 'Sr. Recruiter',
    experience: '3+ Years',
    mobile: '+91 12345 67890',
    recuriter: (
      <TableHeader>
        <Image src={Recuriter} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={Recuriter3} />
        <Details>Wade Deo</Details>
      </TableHeader>
    ),
    src: <Dots src={Dot} />,
  },
  {
    key: '7',
    candidate: (
      <TableHeader>
        <Image src={Recuriter2} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    role: 'Sr. Recruiter',
    experience: '3+ Years',
    mobile: '+91 12345 67890',
    recuriter: (
      <TableHeader>
        <Image src={Recuriter} />
        <Details>Jane Cooper</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={Recuriter3} />
        <Details>Wade Deo</Details>
      </TableHeader>
    ),
    src: <Dots src={Dot} />,
  },
]
