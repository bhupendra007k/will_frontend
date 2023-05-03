import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
`
export const SideBar = styled.div`
  max-width: 259px;
  width: 100%;
  background-color: #ffebb1;
`
export const SectionMain = styled.div`
  flex: 8;
  padding: 0px 12px 42px 12px;
  background-color: #fafafa;
`
export const SubWrapper = styled.div`
  padding: 0px 27px;
`

export const SearchBar = styled.div`
  display: flex;
  background-color: #ffffff;
  outline: none;
  border: none;
  width: 100%;
  justify-content: center;
  box-shadow: 0px 4px 0px #3e49540a;
  border-radius: 20px;
  opacity: 1;
  padding: 8px 15px;
`
export const SearchMain = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-family: 'Inter-Regular';
  font-size: 14px;
  color: #000000;
  opacity: 0.65;
`
export const SearchImg = styled.img`
  max-width: 18px;
  height: 18px;
  margin-top: 10px;
`

export const SeachInput = styled.div`
  display: flex;
  flex: 1.2;
  gap: 20px;
  padding: 7px 15px;
  border-right: 1px solid #e5e5e5;
`
export const LocationInput = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`
export const LocationContent = styled.div`
  display: flex;
  padding-left: 30px;

  gap: 20px;
`
export const LocationImg = styled.img`
  margin-top: 3px;
  max-width: 14px;
  height: 18px;
`
export const LocationSubContent = styled.div`
  font-size: 14px;
  opacity: 0.65;
  width: 100%;
  border: none;
  outline: none;
  font-family: 'Inter-Medium';
`
export const FindButton = styled.button`
  background-color: #1d2e88;
  display: flex;
  gap: 10px;
  padding: 12px 20px;
  color: #fffdfd;
  font-size: 14px;
  font-family: 'Inter-Bold';
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const FindImage = styled.img`
  margin-top: 3px;
  max-width: 16px;
  height: 16px;
`
export const FindContent = styled.div`
  font-size: 16px;
  background-color: #1d2e88;
  font-family: 'Inter-SemiBold';
`
export const Wrapper = styled.div`
  display: flex;
  padding-top: 25px;
`
export const DatabaseProgrammer = styled.div`
  flex: 2;
  padding-right: 30px;
`

export const CardMain = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 18px;
`
export const Card = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  background: #ffffff;
  font-family: 'Inter-SemiBold';
  color: #000;
  border-radius: 20px;
  padding: 23px 22px 18px 24px;
  box-shadow: 0px 4px 4px rgba(62, 73, 84, 0.04);
`
export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`
export const LeftContent = styled.div`
  display: flex;
  gap: 28px;
`
export const LeftImage = styled.img`
  max-width: 36px;
  height: 36px;
`
export const SalaryContent = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: #1d2e88;
  font-family: 'Inter-SemiBold';
`
export const DeveloperWrapper = styled.div``

export const Developer = styled.div`
  font-family: 'Inter-Bold';
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 5px;
  color: #000000;
`
export const TeamWrapper = styled.div`
  display: flex;
  gap: 20px;
`
export const Team = styled.div`
  font-family: 'Inter-Medium';
  font-size: 12px;
  line-height: 15px;
  color: #b0b0b0;
`
export const DeveloperLocation = styled.img`
  max-width: 8px;
  height: 10px;
  margin-right: 6px;
`
export const Location = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: #b0b0b0;
`
export const ParaContent = styled.div`
  font-family: 'Inter-Regular';
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  opacity: 0.65;
`
export const JobDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`
export const JobsButton = styled.div`
  display: flex;
  gap: 15px;
`

export const FullTime = styled.div`
  font-family: 'Inter-Medium';
  font-size: 12px;
  line-height: 15px;
  padding: 6px 19px;
  color: #1d2e88;
  background: #c5cdfa;
  border-radius: 20px;
`

export const Date = styled.div`
  font-family: 'Inter-Medium';
  font-size: 12px;
  line-height: 15px;
  color: #b0b0b0;
`
export const Filter = styled.div`
  flex: 1.1;
`
export const FilterWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(62, 73, 84, 0.04);
  border-radius: 20px;
  padding: 19px 10px 29px 10px;

  .ant-collapse {
    background: #ffffff;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    font-family: 'Inter-SemiBold';
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin: 0px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background: #1d2e88;
    border: none;
    outline: none;
  }
  .ant-checkbox-checked::after {
    border: none;
  }
`
export const RadioWrapper = styled.div`
  .ant-radio-checked .ant-radio-inner {
    border-color: #1d2e88;
  }
  .ant-radio-inner:after {
    background-color: #1d2e88;
  }
  .ant-radio-input:focus + .ant-radio-inner,
  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner {
    border-color: #1d2e88;
  }
`
export const RadioContent = styled.div`
  font-family: 'Inter-Medium';
  font-size: 13px;
  line-height: 16px;
  color: #222222;
`

export const CheckContent = styled.span`
  font-family: 'Inter-Medium';
  font-size: 13px;
  line-height: 135.5%;
  padding-left: 12px;
  color: #222222;
`
export const LeftWrapper = styled.div`
  display: flex;
  gap: 15px;
`
export const RightWrapper = styled.button`
  border: none;
  outline: none;
  background: none;
  font-family: 'Inter-SemiBold';
  font-size: 14px;
  line-height: 17px;
  color: #1d2e88;
`

export const SearchFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  background: #efefef;
  padding: 10px 22px;
  border-radius: 16px;
`
export const SearchImgWrapper = styled.img`
  max-width: 20px;
  height: 20px;
`

export const SearchFilterContent = styled.input`
  background: #efefef;
  border: none;
  width: 100%;
  outline: none;
`

export const ResetWrapper = styled.div`
  display: flex;
  padding: 0px 16px;
  justify-content: space-between;
`

export const FilterImg = styled.img`
  max-width: 15px;
  height: 15px;
  margin-top: 4px;
`
export const FilterContentMain = styled.div`
  font-family: 'Inter-Bold';
  font-size: 16px;
  line-height: 24px;
  color: #1d2e88;
`
