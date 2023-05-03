import { profileData } from 'components/CandidatePage/CandidateProfile/profileData'

import Three from 'assets/images/three.png'

import {
  SectionThree,
  PortfolioHeading,
  PortfolioWrapper,
  ImgThree,
  Card,
  Box,
  ImgIcon,
  HeadingIcon,
  IconWrapper,
} from 'styles/CandidatePortfolio'

const CandidatePortfolio = () => {
  return (
    <SectionThree>
      <PortfolioWrapper>
        <PortfolioHeading>Portfolios</PortfolioHeading>
        <ImgThree src={Three} alt="three" />
      </PortfolioWrapper>
      <Card>
        {profileData.map((e: any, index) => (
          <Box key={index}>
            <IconWrapper>
              <ImgIcon src={e.src} alt="human" />
              <HeadingIcon>{e.heading} </HeadingIcon>
            </IconWrapper>
          </Box>
        ))}
      </Card>
    </SectionThree>
  )
}

export default CandidatePortfolio
