import { useEffect } from 'react'
import Card from 'components/Card'
import cardData from 'components/Card/candidateData'
import Meetings from 'components/Dashboard/Meetings'
import Jobs from 'components/Dashboard/RecommendedJobs'
import ProfileSection from 'components/Dashboard/Profile'
import { companies } from 'views/Dashboard/companiesData'
import useGet from 'hooks/useGet'
import BackArrow from 'assets/images/arrowBack.png'
import Slider from 'assets/images/sliderIndicator.png'
import {
  MainContainer,
  DashboardContent,
  MeetingScheduleContainer,
  ContentContainer,
  FeaturedContainer,
  DataContainer,
  Box,
  CompanyContent,
  CompanyHeading,
  CompanyTitle,
  ContainerHeading,
  BoxImage,
  MeetingContainer,
} from 'styles/Dashboard'
import { Header, ContainerSubHeading, ArrowImage } from 'styles/Dashboard/Meetings'
import { ContainerRight, SliderImage } from 'styles/Dashboard/RecommendedJobs'
const Information = () => {
  const { refetch: fetchDetails, data }: any = useGet({ key: 'userDetails', url: '/get-user', token: true })

  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <>
      <MainContainer>
        <DashboardContent>
          {cardData.map((item: any) => (
            <Card
              key={item.id}
              src={item?.src}
              heading={item?.heading}
              paragraph={item?.paragraph}
              background={item?.background}
            />
          ))}
        </DashboardContent>
        <MeetingScheduleContainer>
          <ProfileSection profileData={data?.data} />
          <ContentContainer>
            <MeetingContainer>
              <Meetings />
            </MeetingContainer>
            <Jobs />
          </ContentContainer>
        </MeetingScheduleContainer>
        <FeaturedContainer>
          <Header>
            <ContainerHeading>Featured Companies</ContainerHeading>
            <ContainerRight>
              <SliderImage src={Slider} alt="slider"></SliderImage>
              <ContainerSubHeading>
                View More
                <ArrowImage src={BackArrow} alt="arrow"></ArrowImage>
              </ContainerSubHeading>
            </ContainerRight>
          </Header>
          <DataContainer>
            {companies.map((e, index) => (
              <Box key={index}>
                <BoxImage src={e.src} alt=""></BoxImage>
                <CompanyContent>
                  <CompanyHeading>{e.heading}</CompanyHeading>
                  <CompanyTitle>{e.title}</CompanyTitle>
                </CompanyContent>
              </Box>
            ))}
          </DataContainer>
        </FeaturedContainer>
      </MainContainer>
    </>
  )
}

export default Information
