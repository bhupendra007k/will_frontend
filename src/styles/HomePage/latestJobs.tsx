import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerTop = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  position: relative;

  padding: 116px 135px 106px 135px;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media (max-width: 768px) {
    padding-left: 70px;
  }
`
export const GradientWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
  overflow-x: visible;
`

export const InformationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainHeading = styled.div`
  font-family: 'Inter-Bold';
  font-size: 56px;
  text-align: left;
  width: 100%;
  max-width: 526px;
  @media (max-width: 1280px) {
    font-size: 35px;
    width: 400px;
  }
`
export const ContentParagraph = styled.p`
  font-family: 'Inter-Regular';
  font-size: 16px;
  padding-top: 16px;
  opacity: 65%;
  width: 60%;
  text-align: left;
  @media (max-width: 375px) {
    width: 80%;
  }
`
export const ParagraphOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`
export const Para = styled.p`
  padding-top: 20px;
  text-align: left;
`
export const RightContainer = styled.div`
  width: 100%;
  max-width: 40%;
  justify-content: center;
  @media (max-width: 1124px) {
    padding-right: 150px;
  }
`
export const ImageContainer = styled.div`
  display: flex;
`

export const JobSectionImage = styled.img`
  width: 100%;
`
export const LeftSideTwo = styled.div``
export const JobHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Inter-SemiBold';
  font-size: 40px;
`
export const Paragraph = styled.p`
  font-family: 'Inter-Regular';
  font-size: 18px;
  text-align: center;
  opacity: 65%;
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  width: 100%;

  align-items: center;
  .Location {
    font-size: 16px;
    opacity: 20%;
    outline: none;
    border: none;
  }
  .salary {
    font-size: 16px;
    opacity: 20%;
    outline: none;
    border: none;
  }
  .type {
    font-size: 16px;
    opacity: 20%;

    outline: none;
    border: none;
  }
  .Title {
    width: 380px;
    height: 70px;
    font-size: 16px;
    outline: none;
    padding-left: 15px;
    border: 1px solid #000000;
    border: none;
    opacity: 20%;
  }
  .search {
    background-color: #1d2e88;
    width: 128px;
    height: 74px;
    color: white;
    border: none;
    border-radius: 0px 15px 15px 0px;
    @media (max-width: 1230px) {
      border-radius: 15px;
    }
    @media (max-width: 1120px) {
      border-radius: 0px 15px 15px 0px;
    }
  }
`
export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0);
`
export const InputContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 372px;
  display: flex;
  height: 70px;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  border: 1px solid #00000033;
  border-radius: 15px 0px 0px 15px;
  align-items: center;
  div {
    padding-left: 30px;
    img {
      :hover {
        opacity: 0.3;
      }
    }
  }
`
export const InputContainerTwo = styled.div`
  border: 1px solid #00000033;
  display: flex;
  flex-direction: row;
  width: 242px;
  height: 70px;
`
export const LocationConatiner = styled.div`
  display: flex;
  flex-direction: row;
`

export const LocationIcon = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  width: 50px;
`
export const InputContainerThree = styled.div`
  border: 1px solid #00000033;
  display: flex;
  width: 242px;
  height: 70px;
`
export const JobContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  font-size: 16px;
`
export const JobIcon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 50px;
`
export const InputContainerFour = styled.div`
  border: 1px solid #00000033;
  display: flex;
  flex-direction: row;
  width: 242px;
`
export const SalaryContainer = styled.div`
  height: 70px;
  border: 1px solid #00000033;
  display: flex;
  flex-direction: row;
  width: 250px;
  font-size: 16px;
`
export const SalaryIcon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 50px;
`
export const SearchButton = styled.div`
  width: 190px;
  height: 70px;
  background: #1d2e88;
  border-radius: 0px 15px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-color: #3d4ea1;
  }
`
