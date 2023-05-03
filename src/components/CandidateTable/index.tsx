import { Table } from 'antd'
import User from 'assets/images/user.png'
import Recruiter from 'assets/images/profileRecuriter.png'
import Interviewer from 'assets/images/candidateIcon.png'
import Star from 'assets/images/rating.png'
import { Details, Image, TableHeader } from 'styles/CandidateTable'
const columns: any = [
  {
    title: 'Candidate Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Ratings',
    dataIndex: 'ratings',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: 'Stages',
    dataIndex: 'stages',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.stages - b.stages,
  },
  {
    title: 'Applied Dates',
    dataIndex: 'appliedDates',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: 'Recriuter',
    dataIndex: 'recruiter',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: 'Interviewer',
    dataIndex: 'interviewer',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.age - b.age,
  },
]

const data = [
  {
    key: '1',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    ratings: (
      <TableHeader>
        <Image src={Star} />
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Technical Round',
    recruiter: (
      <TableHeader>
        <Image src={Recruiter} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={Interviewer} />
        <Details>Wada Doe</Details>
      </TableHeader>
    ),
  },
  {
    key: '2',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    ratings: (
      <TableHeader>
        <Image src={Star} />
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'HR Round',
    recruiter: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={User} />
        <Details>Wada Doe</Details>
      </TableHeader>
    ),
  },
  {
    key: '3',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    ratings: (
      <TableHeader>
        <Image src={Star} />
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Screening',
    recruiter: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={User} />
        <Details>Wada Doe</Details>
      </TableHeader>
    ),
  },
  {
    key: '4',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    ratings: (
      <TableHeader>
        <Image src={Star} />
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Applied',
    recruiter: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={User} />
        <Details>Wada Doe</Details>
      </TableHeader>
    ),
  },
  {
    key: '5',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    ratings: (
      <TableHeader>
        <Image src={Star} />
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Technical Round',
    recruiter: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={User} />
        <Details>Wada Doe</Details>
      </TableHeader>
    ),
  },
  {
    key: '6',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    ratings: (
      <TableHeader>
        <Image src={Star} />
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Technical Round',
    recruiter: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={User} />
        <Details>Wada Doe</Details>
      </TableHeader>
    ),
  },
  {
    key: '7',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    ratings: (
      <TableHeader>
        <Image src={Star} />
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Pre-Onboarding',
    recruiter: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={User} />
        <Details>Wada Doe</Details>
      </TableHeader>
    ),
  },
  {
    key: '8',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    ratings: (
      <TableHeader>
        <Image src={Star} />
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Applied',
    recruiter: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={User} />
        <Details>Wada Doe</Details>
      </TableHeader>
    ),
  },
  {
    key: '9',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    ratings: (
      <TableHeader>
        <Image src={Star} />
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Technical Round',
    recruiter: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={User} />
        <Details>Wada Doe</Details>
      </TableHeader>
    ),
  },
  {
    key: '10',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    ratings: (
      <TableHeader>
        <Image src={Star} />
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Technical Round',
    recruiter: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    interviewer: (
      <TableHeader>
        <Image src={User} />
        <Details>Wada Doe</Details>
      </TableHeader>
    ),
  },
  {
    key: '11',
    name: 'John Doe',
    ratings: '',
    appliedDates: '25 May 2022',
    stages: 'Technical Round',
    recruiter: 'John Doe',
    interviewer: 'Wada Doe',
  },
  {
    key: '12',
    name: 'John Doe',
    ratings: '',
    appliedDates: '25 May 2022',
    stages: 'Technical Round',
    recruiter: 'John Doe',
    interviewer: 'Wada Doe',
  },
  {
    key: '13',
    name: 'John Doe',
    ratings: '',
    appliedDates: '25 May 2022',
    stages: 'Technical Round',
    recruiter: 'John Doe',
    interviewer: 'Wada Doe',
  },
]

const CandidateTable = () => <Table columns={columns} dataSource={data} />

export default CandidateTable
