import styled from 'styled-components'

export const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0px 45px 0px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`
export const Left = styled.div`
  border-right: 1px solid #e7e7e7;
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-right: none;
  }
`
export const Right = styled.div`
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`
export const NameHeading = styled.div`
  font-size: 14px;
  width: 100%;
  font-family: 'INTER-bold';
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`

export const EditHeading = styled.div`
  font-family: 'INTER-semibold';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  opacity: 0.65;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`
export const UsernameHeading = styled.div`
  font-weight: 700;
  font-size: 14px;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`
export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 1200px) {
    gap: 20px;
  }
`
export const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 25px;
  @media (max-width: 1200px) {
    padding-right: 94px;
  }
`
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    gap: 10px;
  }
`
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    gap: 10px;
  }
`
