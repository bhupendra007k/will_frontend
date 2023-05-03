import ScrollToTop from 'components/ScrollToTop'
import { ContactRoute, HomepageRoute } from 'constants/routes'
import { useNavigate } from 'react-router-dom'
import {
  Section,
  FooterContainer,
  LeftContainer,
  RightContainer,
  LogoContainer,
  Card,
  ListItems,
  Lists,
  Wrapper,
  Rights,
  ListHead,
} from 'styles/Footer'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <Section>
      <ScrollToTop />
      <FooterContainer>
        <LeftContainer>
          <Card>
            <div>
              <LogoContainer onClick={() => navigate(HomepageRoute.path)} />
            </div>
            <div>The main solution for everyone who are looking for a job</div>
          </Card>
        </LeftContainer>
        <RightContainer>
          <Wrapper>
            <Lists>
              <div>
                <ListHead>About</ListHead>
                <ListItems>Company</ListItems>
                <ListItems>Profile</ListItems>
                <ListItems>Career</ListItems>
              </div>
              <div>
                <ListHead>Resources</ListHead>
                <ListItems onClick={() => navigate(ContactRoute.path)}>Contact</ListItems>
                <ListItems>Application</ListItems>
                <ListItems>FAQ</ListItems>
              </div>
              <div>
                <ListHead>Legals</ListHead>
                <ListItems>Terms of use</ListItems>
                <ListItems>Privacy policy</ListItems>
                <ListItems>Application</ListItems>
              </div>
            </Lists>
          </Wrapper>
        </RightContainer>
      </FooterContainer>
      <Rights>© 2022 WIL Hiring. All rights reserved.</Rights>
    </Section>
  )
}

export default Footer
