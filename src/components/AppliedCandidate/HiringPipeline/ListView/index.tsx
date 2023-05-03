import React from 'react'
import { Table } from 'antd'
import Columns from './data'
import { Container, Wrapper } from 'styles/CandidateData/ListView'
import { IData } from 'components/AppliedCandidate/DummyData/data'

export interface ICandidateData {
  data: IData[]
}
const ListView = ({ data }: ICandidateData) => {
  return (
    <Container>
      <Wrapper>
        <Table className="list-applied_candidate" columns={Columns} dataSource={data} />
      </Wrapper>
    </Container>
  )
}

export default ListView
