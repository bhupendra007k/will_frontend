import SocialData from 'components/CandidatePage/CandidateSocialmedia/data'

import Cross from 'assets/images/Cross.png'
import ViewDropdown from 'assets/images/ViewDropdown.png'

import {
  WebContainer,
  WebHeading,
  WebLine,
  SocialWrapper,
  SiteContainer,
  MediaLogo,
  LogoHeading,
  IconImg,
  LinkContainer,
  LinkWrapper,
  CrossImg,
  ViewWrapper,
  ViewHeading,
  ViewLogo,
  ViewImage,
  Card,
} from 'styles/CandidateModal'
const Social = () => {
  return (
    <div>
      <WebContainer>
        <WebHeading>On the Web</WebHeading>
        <WebLine />
      </WebContainer>
      <Card>
        {SocialData.map((e: any, index) => (
          <SocialWrapper key={index}>
            <SiteContainer>
              <MediaLogo>
                <IconImg src={e.src} alt="facebook" />
              </MediaLogo>
              <LogoHeading>{e.heading}</LogoHeading>
            </SiteContainer>
            <LinkContainer>
              <LinkWrapper>{e.link}</LinkWrapper>
              <CrossImg src={Cross} alt="cross"></CrossImg>
            </LinkContainer>
          </SocialWrapper>
        ))}
      </Card>
      <ViewWrapper>
        <ViewHeading>View more</ViewHeading>
        <ViewLogo>
          <ViewImage src={ViewDropdown} alt="view"></ViewImage>
        </ViewLogo>
      </ViewWrapper>
    </div>
  )
}

export default Social
