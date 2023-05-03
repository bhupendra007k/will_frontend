import { DownOutlined } from '@ant-design/icons'
import {
  Container,
  CardWrapper,
  CardContainer,
  Wrapper,
  TitleWrap,
  Title,
  Header,
  CandidateCount,
  ProfileContainer,
  ProfileWrapper,
  ProfileCard,
  DetailSection,
  Dot,
  ProfileRating,
  RatingSection,
  Days,
} from 'styles/CandidateData/GridView'
import Dots from 'assets/images/Dots 2.png'
import { IData } from 'components/AppliedCandidate/DummyData/data'

interface ICandidateData {
  data: IData[]
}
const PreonboardingGridView = ({ data }: ICandidateData) => {
  const _ = require('lodash')
  const PreonboardingData = _.groupBy(data, 'subStage')

  return (
    <Container>
      <Wrapper>
        {Object.entries(PreonboardingData).map((e: any, index: number) => {
          return (
            <CardContainer key={index}>
              <CardWrapper>
                <Header>
                  <TitleWrap>
                    <Title>{e[0]}</Title>
                    <DownOutlined />
                  </TitleWrap>
                  <CandidateCount>{e[1].length}</CandidateCount>
                </Header>
              </CardWrapper>
              {e[1].map((values: any, i: number) => {
                return (
                  <>
                    <ProfileContainer>
                      <ProfileWrapper key={i}>
                        <ProfileCard>
                          <DetailSection>{values?.profile}</DetailSection>
                          <Dot src={Dots} />
                        </ProfileCard>

                        <ProfileRating>
                          {values?.subStage === 'Start' ? (
                            <RatingSection key={i}>{values?.rating}</RatingSection>
                          ) : (
                            <RatingSection key={i}>{values?.attachments}</RatingSection>
                          )}

                          <Days>{values?.days} days ago</Days>
                        </ProfileRating>
                      </ProfileWrapper>
                    </ProfileContainer>
                  </>
                )
              })}
            </CardContainer>
          )
        })}
      </Wrapper>
    </Container>
  )
}

export default PreonboardingGridView
