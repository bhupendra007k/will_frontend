import React from 'react'
import { Table } from 'antd'
import Columns from './data'

import { Container, Wrapper } from 'styles/CandidateData/ListView'
import { IData } from 'components/AppliedCandidate/DummyData/data'

interface ICandidateData {
  data: IData[]
}
const PreOnBoardingListView = ({ data }: ICandidateData) => {
  return (
    <Container>
      <Wrapper>
        <Table columns={Columns} dataSource={data} />
      </Wrapper>
    </Container>
  )
}

export default PreOnBoardingListView
