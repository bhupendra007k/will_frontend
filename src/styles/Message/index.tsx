import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`
export const MessageWrapper = styled.div`
  max-width: 346px;
  width: 100%;
  padding: 0px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(62, 73, 84, 0.04);
  border-radius: 20px;
  @media (max-width: 1024px) {
    max-width: 702px;
    width: 100%;
    z-index: 2;
  }
`
export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  padding-top: 25px;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Input = styled.input`
  max-width: 302px;
  width: 100%;
  height: 42px;
  background: #efefef;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding-left: 22px;
  border: none;
  outline: none;
  font-size: 12px;
  font-family: 'Inter-Regular';
`
export const SearchIcon = styled.div`
  padding: 8px 5px;
  background: #efefef;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
  outline: none;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeadingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 20px;
`
export const Header = styled.h3`
  display: flex;
  font-size: 16px;
  font-family: 'Inter-SemiBold';
`
export const SubHeader = styled.h3`
  display: flex;
  justify-content: center;
  max-width: 86px;
  width: 100%;
  gap: 10px;
  border-radius: 20px;
  background: #efefef;
`
export const DropArrow = styled.img`
  align-items: center;
  height: 23px;
  padding-top: 4px;
`
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  border-bottom: 1px solid rgb(34 34 34 / 14%);
`
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  align-items: center;
  max-width: 32px;
  width: 100%;
  border-radius: 56px;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`
export const ContentHeader = styled.h4`
  font-size: 14px;
  font-family: 'Inter-SemiBold';
`
export const ContentSubHeader = styled.p`
  font-size: 12px;
  font-family: 'Inter-Medium';
  color: #797979;
`
export const DateWrapper = styled.p`
  font-size: 10px;
  font-family: 'Inter-SemiBold';
  color: rgba(0, 0, 0, 0.65);
  padding-top: 20px;
`
export const InboxWrapper = styled.div`
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(62, 73, 84, 0.04);
  border-radius: 20px;
  z-index: 2;
`
export const LeftHeader = styled.div`
  display: flex;
  gap: 15px;
  padding: 0px 10px;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SubHeading = styled.p`
  font-size: 12px;
  font-family: 'Inter-Medium';
  color: rgba(121, 121, 121, 1);
`
export const RightHeader = styled.div`
  padding: 10px 20px;
`
export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid rgb(34 34 34 / 14%);
`
export const Content = styled.p`
  font-size: 11px;
  font-family: 'Inter-Medium';
  padding: 10px 35px;
  color: rgba(29, 46, 136, 1);
  align-self: center;
  max-width: 322px;
  width: 100%;
  border-radius: 20px;
  background: #dce2ff;
`
export const MessageSection = styled.div`
  min-height: 500px;
`
export const InboxContent = styled.div`
  display: flex;
  gap: 20px;
  padding: 50px 20px;
`
export const CompanyImage = styled.img`
  height: 25px;
  width: 25px;
`
export const InboxData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 377px;
  width: 100%;
  border: 0.25px solid rgba(0, 0, 0, 0.4);
  border-radius: 0px 12px 12px 12px;
`
export const MessageParagraph = styled.p`
  font-family: 'Inter-Medium';
  font-size: 12px;
  color: rgba(121, 121, 121, 1);
  padding-left: 15px;
`
export const Heading = styled.h4`
  font-size: 12px;
  font-family: 'Inter-Bold';
  padding-left: 15px;
  padding-top: 10px;
`
export const CandidateMessage = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  padding: 0px 20px;
`
export const UserImage = styled.img`
  height: 25px;
  width: 25px;
  margin-top: 68px;
  margin-right: 10px;
`
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 377px;
  width: 100%;
  border: 0.25px solid rgba(0, 0, 0, 0.4);
  border-radius: 12px 12px 0px 12px;
`
export const DateContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
`
export const Date = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 63px;
  width: 100%;
  color: rgba(29, 46, 136, 1);
  font-size: 11px;
  font-family: 'Inter-Medium';
  padding-top: 3px;
`
export const Divider = styled.p`
  border: 1px solid rgb(34 34 34 / 14%);
  height: 1px;
  max-width: 570px;
  width: 100%;
  margin-top: 10px;
`
export const BackgroundImage = styled.img`
  position: absolute;
  right: 1px;
`
export const Section = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fafafa;
  padding: 0px 28px;
  gap: 15px;
  padding: 25px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`
export const BottomImage = styled.img`
  position: absolute;
  right: 1px;
  top: 723px;
  /* bottom: -30px; */
  /* @media (max-width: 1024px) {
    position: absolute;
    right: 1px;
    bottom: -30px;
  } */
`
