import {
  Navbar,
  Heading,
  BoxImage,
  DiceImage,
  NavWrapper,
  RecruiterWrapper,
  RecruiterHeading,
  LineWrapper,
} from 'styles/RecruiterInfo'
import Box from 'assets/images/listData.png'
import Dice from 'assets/images/dice.png'

const index = () => {
  return (
    <Navbar>
      <NavWrapper>
        <Heading>Recruiters</Heading>
        <LineWrapper />
        <BoxImage src={Box} alt="box" />
        <DiceImage src={Dice} alt="" />
      </NavWrapper>
      <RecruiterWrapper>
        <RecruiterHeading>Add Recruiter</RecruiterHeading>
      </RecruiterWrapper>
    </Navbar>
  )
}

export default index
