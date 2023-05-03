import { Table } from 'antd'
import User from 'assets/images/user.png'
import Attachment from 'assets/images/pdfFile.png'
import Recruiter from 'assets/images/profileRecuriter.png'
import Interviewer from 'assets/images/candidateIcon.png'
import { TableHeader, Image, Details } from 'styles/CandidateTable'

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
    title: 'Attachments',
    dataIndex: 'attachments',
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
    attachments: (
      <TableHeader>
        <Image src={Attachment} />
        <Details>2 files</Details>
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Release Offer',
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
    attachments: (
      <TableHeader>
        <Image src={Attachment} />
        <Details>2 files</Details>
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Release Offer',
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
    key: '3',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    attachments: (
      <TableHeader>
        <Image src={Attachment} />
        <Details>2 files</Details>
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Verify Info',
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
    key: '4',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    attachments: (
      <TableHeader>
        <Image src={Attachment} />
        <Details>2 files</Details>
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Start',
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
    key: '5',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    attachments: (
      <TableHeader>
        <Image src={Attachment} />
        <Details>2 files</Details>
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Collect Info',
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
    key: '6',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    attachments: (
      <TableHeader>
        <Image src={Attachment} />
        <Details>2 files</Details>
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Collect Info',
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
    key: '7',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    attachments: (
      <TableHeader>
        <Image src={Attachment} />
        <Details>2 Files</Details>
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Release Offer',
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
    key: '8',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    attachments: (
      <TableHeader>
        <Image src={Attachment} />
        <Details>2 files</Details>
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Start',
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
    key: '9',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    attachments: (
      <TableHeader>
        <Image src={Attachment} />
        <Details>2 files</Details>
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Start',
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
    key: '10',
    name: (
      <TableHeader>
        <Image src={User} />
        <Details>John Doe</Details>
      </TableHeader>
    ),
    attachments: (
      <TableHeader>
        <Image src={Attachment} />
        <Details>2 files</Details>
      </TableHeader>
    ),
    appliedDates: '25 May 2022',
    stages: 'Start',
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
]
const OnboardingTable = () => <Table columns={columns} dataSource={data} />

export default OnboardingTable
