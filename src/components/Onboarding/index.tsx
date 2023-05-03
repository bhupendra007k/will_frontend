import { DownOutlined, MoreOutlined } from '@ant-design/icons'

import Profile from 'assets/images/user.png'
import File from 'assets/images/file.png'
import Star from 'assets/images/star.png'

import {
  MainWrapper,
  MainSection,
  Container,
  DataWrapper,
  Wrapper,
  Content,
  EventWrapper,
  EventContainer,
  Counter,
  Card,
  SubCard,
  Headers,
  HeadingWrapper,
  Paragraph,
  Collector,
  DataWrappers,
  CardWrapper,
} from 'styles/Onboarding'
import { Title } from 'styles/JobDetails'

interface ICandidate {
  data: any[]
}

const Candidate = ({ data }: ICandidate) => {
  return (
    <MainWrapper>
      <MainSection>
        <Container>
          <DataWrapper>
            <CardWrapper>
              <Wrapper>
                <Content>
                  <EventWrapper>
                    <EventContainer>
                      <Title>
                        Start <DownOutlined />
                      </Title>
                      <Counter>22</Counter>
                    </EventContainer>
                  </EventWrapper>
                </Content>
                {data.map((e, index) => (
                  <Card key={index}>
                    <SubCard>
                      <Headers>
                        <HeadingWrapper>
                          <img src={Profile} alt="load..." />
                          <Paragraph>
                            {e.name}
                            <MoreOutlined />
                          </Paragraph>
                        </HeadingWrapper>
                      </Headers>
                      <Collector>
                        <img src={Star} alt="rating..." />
                        <DataWrappers>{e.data}</DataWrappers>
                      </Collector>
                    </SubCard>
                  </Card>
                ))}
              </Wrapper>
              <Wrapper>
                <Content>
                  <EventWrapper>
                    <EventContainer>
                      <Title>
                        Collect Info <DownOutlined />
                      </Title>
                      <Counter>15</Counter>
                    </EventContainer>
                  </EventWrapper>
                </Content>
                {data.map((e, index) => (
                  <Card key={index}>
                    <SubCard>
                      <Headers>
                        <HeadingWrapper>
                          <img src={Profile} alt="load..." />
                          <Paragraph>
                            {e.name}
                            <MoreOutlined />
                          </Paragraph>
                        </HeadingWrapper>
                      </Headers>
                      <Collector>
                        <img src={File} alt="load.." />
                        <DataWrappers>{e.data}</DataWrappers>
                      </Collector>
                    </SubCard>
                  </Card>
                ))}
              </Wrapper>
              <Wrapper>
                <Content>
                  <EventWrapper>
                    <EventContainer>
                      <Title>
                        Verify Info
                        <DownOutlined />
                      </Title>
                      <Counter>14</Counter>
                    </EventContainer>
                  </EventWrapper>
                </Content>
                {data.map((e, index) => (
                  <Card key={index}>
                    <SubCard>
                      <Headers>
                        <HeadingWrapper>
                          <img src={Profile} alt="load..." />
                          <Paragraph>
                            {e.name}
                            <MoreOutlined />
                          </Paragraph>
                        </HeadingWrapper>
                      </Headers>
                      <Collector>
                        <img src={File} alt="load.." />
                        <DataWrappers>{e.data}</DataWrappers>
                      </Collector>
                    </SubCard>
                  </Card>
                ))}
              </Wrapper>
              <Wrapper>
                <Content>
                  <EventWrapper>
                    <EventContainer>
                      <Title>
                        Release Offer <DownOutlined />
                      </Title>
                      <Counter>3</Counter>
                    </EventContainer>
                  </EventWrapper>
                </Content>
                {data.map((e, index) => (
                  <Card key={index}>
                    <SubCard>
                      <Headers>
                        <HeadingWrapper>
                          <img src={Profile} alt="load..." />
                          <Paragraph>
                            {e.name}
                            <MoreOutlined />
                          </Paragraph>
                        </HeadingWrapper>
                      </Headers>
                      <Collector>
                        <img src={File} alt="load.." />
                        <DataWrappers>{e.data}</DataWrappers>
                      </Collector>
                    </SubCard>
                  </Card>
                ))}
              </Wrapper>
              <Wrapper>
                <Content>
                  <EventWrapper>
                    <EventContainer>
                      <Title>
                        Offer Accept <DownOutlined />
                      </Title>
                      <Counter>3</Counter>
                    </EventContainer>
                  </EventWrapper>
                </Content>
                {data.map((e, index) => (
                  <Card key={index}>
                    <SubCard>
                      <Headers>
                        <HeadingWrapper>
                          <img src={Profile} alt="load..." />
                          <Paragraph>
                            {e.name}
                            <MoreOutlined />
                          </Paragraph>
                        </HeadingWrapper>
                      </Headers>
                      <Collector>
                        <img src={File} alt="load.." />
                        <DataWrappers>{e.data}</DataWrappers>
                      </Collector>
                    </SubCard>
                  </Card>
                ))}
              </Wrapper>
              <Wrapper>
                <Content>
                  <EventWrapper>
                    <EventContainer>
                      <Title>
                        Hired <DownOutlined />
                      </Title>
                      <Counter>3</Counter>
                    </EventContainer>
                  </EventWrapper>
                </Content>
                {data.map((e, index) => (
                  <Card key={index}>
                    <SubCard>
                      <Headers>
                        <HeadingWrapper>
                          <img src={Profile} alt="load..." />
                          <Paragraph>
                            {e.name}
                            <MoreOutlined />
                          </Paragraph>
                        </HeadingWrapper>
                      </Headers>
                      <Collector>
                        <img src={File} alt="load.." />
                        <DataWrappers>{e.data}</DataWrappers>
                      </Collector>
                    </SubCard>
                  </Card>
                ))}
              </Wrapper>
            </CardWrapper>
          </DataWrapper>
        </Container>
      </MainSection>
    </MainWrapper>
  )
}

export default Candidate
