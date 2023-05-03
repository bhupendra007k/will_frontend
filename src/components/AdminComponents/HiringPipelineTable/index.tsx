import React from 'react'
import { Table } from 'antd'
import RatingStar from 'assets/svg/RatingIcon'
import 'App.css'
import 'antd/dist/antd.css'

const columns = [
  {
    title: 'Stages',
    dataIndex: 'stage',
    width: '30%',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
  },
  {
    title: 'Rated-By',
    dataIndex: 'ratedby',
    width: '40%',
  },
]
const data = [
  {
    key: '1',
    stage: 'Applied',
    rating: <RatingStar />,
    ratedby: '',
  },
  {
    key: '2',
    stage: 'Screening',
    rating: <RatingStar />,
    ratedby: 'Esther Ludokross',
  },
  {
    key: '3',
    stage: 'Technical',
    rating: <RatingStar />,
    ratedby: 'Boskov Christoffuer',
  },
  {
    key: '4',
    stage: 'Manager',
    rating: <RatingStar />,
    ratedby: 'Kimshin karlos',
  },
  {
    key: '5',
    stage: 'Hr-Round',
    rating: <RatingStar />,
    ratedby: 'Douglus Beskar',
  },
  {
    key: '6',
    stage: 'Pre-onboarding',
    rating: <RatingStar />,
    ratedby: 'Yerley Grandine',
  },
  {
    key: '7',
    stage: 'Hired',
    rating: <RatingStar />,
    ratedby: 'Brnadison',
  },
]

const PipelineTable = () => <Table columns={columns} dataSource={data} pagination={false} />

export default PipelineTable
