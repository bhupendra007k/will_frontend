import { FormContainer, SubContainer, Message, HeadingContainer, ParaContainer, ContactBar } from 'styles/Footer'
import { SearchArea, Input, BtnContainer, Button } from 'styles/SubsBar'
interface ISubsProps {
  subsRef: React.RefObject<HTMLDivElement>
}

const Subsform = ({ subsRef }: ISubsProps) => {
  return (
    <FormContainer ref={subsRef}>
      <SubContainer>
        <Message>
          <HeadingContainer>
            <h1 className="heading">Subscribe Our Newsletter for Daily Updates</h1>
          </HeadingContainer>
          <ParaContainer>
            <p className="para">Be a part of us and get the latest information</p>
          </ParaContainer>
        </Message>
        <ContactBar>
          <SearchArea>
            <Input placeholder="Enter your e-mail"></Input>
            <BtnContainer>
              <Button className="button">Subscribe</Button>
            </BtnContainer>
          </SearchArea>
        </ContactBar>
      </SubContainer>
    </FormContainer>
  )
}

export default Subsform
