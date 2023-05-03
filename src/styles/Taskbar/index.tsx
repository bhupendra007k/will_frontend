import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fafafa;
  padding: 0px 40px 0px 20px;
  z-index: 1;
`
export const LeftSection = styled.div`
  display: flex;
  max-width: 250px;
  width: 100%;
  gap: 30px;
`
export const ImageIcon = styled.img`
  padding: 36px 0px;
  max-width: 22px;
`
export const Heading = styled.h2`
  padding-top: 30px;
  max-width: 230px;
  font-size: 20px;
  font-family: 'Inter-SemiBold';
`
export const MiddleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 28px;
  width: 100%;
`
export const Input = styled.input`
  background: #efefef;
  padding-left: 20px;
  border-radius: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  max-width: 390px;
  width: 100%;
  border: none;
  font-size: 12px;
  font-family: 'Inter-Regular';
  outline: none;
`
export const Icon = styled.button`
  border: none;
  height: 42px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  img {
    margin: 0px 15px;
  }
`
export const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`
export const ImageSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 62px;
`
export const BellImg = styled.img`
  padding: 10px 6px 10px 7px;
`

export const Btn = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 50px;
  opacity: 1;
  border: none;
  position: relative;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  border: none;
  background: none;
`
export const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 120px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale();
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale();
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale();
  transition: all 200ms ease-in;
  transform: scale();
  cursor: pointer;
`

export const ProfileImage = styled.img`
  max-width: 43px;
  cursor: pointer;
`
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProfileHeading = styled.h2`
  font-size: 15px;
  font-family: 'Inter-SemiBold';
  padding-top: 9px;
  margin: 0px;
`

export const ProfileParagraph = styled.p`
  font-size: 10px;
  align-items: center;
  margin-top: 0px;
  opacity: 0.65;
`
export const PopOverWrapper = styled.div`
  display: grid;
  gap: 18px;
  padding: 10px 30px 10px 7px;
`

export const SubWrapper = styled.div`
  display: flex;
  gap: 18px;
  text-align: center;
`
export const Logo = styled.img`
  margin-top: 2px;
  max-width: 16px;
  height: 16px;
`
export const Content = styled.div`
  font-size: 16px;
  font-family: 'Inter-SemiBold';
  line-height: 19px;
  color: #111111;
`
