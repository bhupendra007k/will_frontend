import styled from 'styled-components'

export const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`
export const JobHeading = styled.h4`
  padding-top: 30px;
  font-size: 16px;
  font-family: 'Inter-SemiBold';
`
export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

export const SliderImage = styled.img`
  display: flex;
  height: 10px;
`
export const MainCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
  justify-items: center;
  gap: 20px;
  width: 100%;
`
export const SubCard = styled.div`
  max-width: 322px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 4px 19px #3e49540a;
  @media (max-width: 1674px) {
    :last-child {
      display: none;
    }
  }
`
export const CompanyImage = styled.img`
  align-self: center;
  width: 93px;
`
export const JobContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: 78px;
  }
  .salary {
    display: flex;
    flex-direction: column;
  }
`
export const ContentLeft = styled.div`
  color: #797979;
  opacity: 1;
  font-family: 'Inter-Medium';
  font-size: 11px;
`
export const ContentSubHeading = styled.p`
  font-size: 16px;
  padding-top: 5px;
  margin: 0px;
  font-size: 16px;
  font-family: 'Inter-SemiBold';
  opacity: 1;
`
export const SalaryContent = styled.p`
  color: #1d2e88;
  opacity: 1;
  font-family: 'Inter-Medium';
  font-size: 12px;
`
export const ContentRight = styled.div`
  display: flex;
  width: auto;
  max-height: 78px;
`
export const ContentPara = styled.div`
  opacity: 0.65;
  font-family: 'Inter-Regular';
  font-size: 12px;
  font-weight: 400;
  max-width: 265px;
`
export const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardButton = styled.button`
  border-radius: 15px;
  opacity: 1;
  background-color: #c5cdfa;
  color: #1d2e88;
  border: none;
  font-size: 11px;
  cursor: pointer;
  width: 76px;
  height: 34px;
`
export const LocationContent = styled.p`
  display: flex;
  flex-direction: row-reverse;
  font-family: 'Inter-Medium';
  font-size: 12px;
  padding-top: 5px;
`
