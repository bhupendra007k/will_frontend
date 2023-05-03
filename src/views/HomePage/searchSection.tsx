import SearchBar from 'components/Searchbar'
import Group from 'assets/images/group.png'
import Top from 'assets/images/topImg.png'
import {
  Container,
  MainContainer,
  LeftSection,
  RightSection,
  Heading,
  Para,
  HeadingPara,
  SideImg,
  Banner,
} from 'styles/HomePage/index'
interface IHomeProps {
  homeRef: React.RefObject<HTMLDivElement>
}

const SearchSection = ({ homeRef }: IHomeProps) => {
  return (
    <MainContainer ref={homeRef}>
      <SideImg src={Top}></SideImg>
      <Container>
        <LeftSection>
          <HeadingPara>
            <Heading>Your Dream Job is Waiting for You</Heading>
          </HeadingPara>
          <Para>
            Find a job that matched with your ability and interest is easier now. Just browse the job and apply whenever
            and wherever you want.
          </Para>
          <SearchBar />
        </LeftSection>
        <RightSection>
          <Banner src={Group}></Banner>
        </RightSection>
      </Container>
    </MainContainer>
  )
}

export default SearchSection
