import ProgressChart from 'components/Progress'

import Man from 'assets/images/person1.png'
import Email from 'assets/images/emailTwo.png'
import Mobile from 'assets/images/mobile.png'

import {
  SectionTwo,
  Image,
  Border,
  SubBorder,
  HeadingName,
  SubHeading,
  FollowWrapper,
  Followers,
  Following,
  Num,
  SubHead,
  LineThree,
  MobileContainer,
  MobileNumber,
  EmailAdd,
  NumberData,
  ImgCall,
  EmailContainer,
  EmailData,
  ImgEmail,
  PieChart,
  PieWrapper,
  PieHeading,
  PieName,
  ProfileWrapper,
  NameWrapper,
} from 'styles/CandidateReport'

interface IMprops {
  showModal?: (value: boolean) => void
}

const ProfileReport: React.FC<IMprops> = ({ showModal }: IMprops) => (
  <SectionTwo>
    <ProfileWrapper>
      <Border>
        <SubBorder>
          <Image
            onClick={() => {
              if (showModal) {
                showModal(true)
              }
            }}
          >
            <img src={Man} alt="man" />
          </Image>
        </SubBorder>
      </Border>
      <NameWrapper>
        <HeadingName>Shardul</HeadingName>
        <SubHeading>Web Developer</SubHeading>
      </NameWrapper>
    </ProfileWrapper>
    <FollowWrapper>
      <Following>
        <Num>24</Num>
        <SubHead>Following</SubHead>
      </Following>
      <Followers>
        <Num>4,597</Num>
        <SubHead>Followers</SubHead>
      </Followers>
    </FollowWrapper>
    <LineThree></LineThree>
    <MobileContainer>
      <NumberData>
        <ImgCall src={Mobile} alt="man" className="call" />
      </NumberData>
      <MobileNumber>+91 9368762229</MobileNumber>
    </MobileContainer>
    <EmailContainer>
      <EmailData>
        <ImgEmail src={Email} alt="man" />
      </EmailData>
      <EmailAdd>kamna.joshi@thewitslab.com</EmailAdd>
    </EmailContainer>
    <PieWrapper>
      <PieChart>
        <ProgressChart percent={44} strokeColor="#F9C52B" />
        <ProgressChart percent={66} strokeColor="#1D2E88" />
        <ProgressChart percent={55} strokeColor="#22AB92" />
      </PieChart>
    </PieWrapper>
    <PieName>
      <PieHeading>Figma</PieHeading>
      <PieHeading>Web Dev</PieHeading>
      <PieHeading>photoShop</PieHeading>
    </PieName>
  </SectionTwo>
)

export default ProfileReport
