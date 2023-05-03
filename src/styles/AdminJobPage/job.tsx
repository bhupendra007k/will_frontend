import styled from 'styled-components'
interface IActive {
  active: boolean
}
export const MainWrapper = styled.div`
  display: flex;
`

export const SectionMain = styled.div`
  display: grid;
  gap: 20px;
  flex: 8;
  background-color: #fafafa;

  .ant-pagination-item-active {
    border-radius: 17px;
    background: #1d2e88;
    color: #ffffff;
  }
  .ant-pagination-item-active a {
    color: white;
  }

  .ant-pagination-item {
    border: none;
  }

  .anticon svg {
    color: #1d2e88;
  }
`
export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`

export const ContentWrapper = styled.div`
  display: grid;
  background: #fff;
  border-radius: 20px;
  z-index: 3;
`
export const RecruitWrap = styled.div`
  padding: 20px 0 0 0;
  min-height: 360px;
`
export const DataWrapper = styled.div`
  display: grid;
  background: #ffffff2d;
  border-radius: 20px;
  padding: 20px;
  grid-gap: 30px;
  z-index: 3;
  overflow: hidden;
  max-height: 85vh;
  align-items: center;
`
export const JobsWrapper = styled.div`
  display: grid;
  background: #ffffff2d;
  border-radius: 20px;
  z-index: 3;
  overflow: auto;
  min-height: 450px;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
`
export const Container = styled.div`
  display: grid;
  padding: 0px 40px;
  align-items: center;
  background: #fff;
`

export const RecruiterWrappper = styled.div`
  display: grid;
  background: #fff;
  border-radius: 20px;
  z-index: 3;
  overflow: hidden;
  max-height: 250px;
  align-items: center;
`
export const PostedJobs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  max-height: 40px;
  align-items: center;
`
export const JobsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`
export const JobsContentSub = styled.div`
  font-family: 'Inter-SemiBold';
  font-size: 24px;
  max-width: 160px;
  width: 100%;
  line-height: 29px;
  color: #000000;
`
export const JobsContentSub2 = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    width: 155px;
    border-radius: 8px;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector :hover {
    outline: none;
    border: none;
  }
  .ant-select-dropdown {
    width: 155px;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item {
    color: rgba(34, 34, 34, 0.5);
    font-family: 'Inter-SemiBold';
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item {
    padding: 4px;
  }
  .ant-select-arrow {
    right: 18px;
  }
  .anticon svg {
    color: rgba(34, 34, 34, 0.5);
    font-size: 14px;
  }
`
export const TableWrapper = styled.div`
  .ant-table-pagination.ant-pagination {
    display: none;
  }
`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  max-height: 77vh;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1200px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 997px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 786px) {
    grid-template-columns: auto;
  }
`
export const Card = styled.div`
  border: 1px solid #3e49540a;
  border-radius: 10px;
  max-width: 300px;
  box-shadow: 0px 4px 4px rgba(62, 73, 84, 0.4);
  width: 100%;
  box-shadow: 0px 4px 4px rgba(62, 73, 84, 0.4);
  max-height: 310px;
  @media (max-width: 1740px) {
    max-width: 340px;
    width: 100%;
  }
`
export const CardContainer = styled.div`
  padding: 12px 12px 13px 12px;
  border-bottom: 1px solid #0000002e;
`

export const Type = styled.div`
  font-size: 16px;
  line-height: 19px;
  padding-left: 9px;
  color: rgba(34, 34, 34, 0.5);
  font-family: 'Inter-SemiBold';
`
export const Developer = styled.div`
  font-size: 16px;
  line-height: 19px;
  padding-left: 9px;
  color: #1d2e88;
  padding-top: 12px;
  font-family: 'Inter-SemiBold';
`
export const Position = styled.div`
  font-size: 12px;
  line-height: 15px;
  padding: 15px 0px 8px 9px;
  font-family: 'Inter-SemiBold';
  color: #000000;
`
export const TotalContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 3.0191px 3.0191px rgba(62, 73, 84, 0.04);
  border-radius: 6.03819px;
  display: grid;
  grid-template-columns: auto auto;
  flex-wrap: wrap;
  word-break: break-word;
  gap: 12px;
`
export const TotalLeftWrapper = styled.div`
  padding: 7px 0px 7px 14px;
`
export const TotalLeftContent = styled.div`
  border-left: 2px solid #1d2e88;
  padding-left: 12px;
`

export const TotalRightWrapper = styled.div`
  padding: 7px 0px;
`
export const TotalRightContainer = styled.div`
  border-left: 2px solid #35dc94;
  padding-left: 12px;
`
export const TotalText = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-family: 'Inter-Medium';
  color: rgba(34, 34, 34, 0.6);
`

export const FilledText = styled.div`
  font-size: 24px;
  line-height: 29px;
  font-family: 'Inter-SemiBold';
  padding-top: 4px;
  color: #000000;
`
export const ActiveContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 3.0191px 3.0191px rgb(62 73 84 / 10%);
  border-radius: 6.03819px;
  display: grid;
  grid-template-columns: auto auto auto;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  word-break: break-word;
  gap: 12px;
  padding: 5px 0px 5px 11px;
`
export const ActiveText = styled.div`
  border-left: 2px solid rgba(34, 34, 34, 0.5);
  padding-left: 10px;
`
export const ActiveContent = styled.div`
  font-size: 10px;
  line-height: 12px;
  padding-bottom: 3px;
  font-family: 'Inter-Medium';
  color: rgba(34, 34, 34, 0.6);
`

export const ActiveNumber = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-family: 'Inter-SemiBold';
  color: #000000;
`
export const Details = styled.button`
  font-size: 12px;
  background: none;
  border: none;
  outline: none;
  padding: 6px 0px 12px 0px;
  display: block;
  margin: auto;
  cursor: pointer;
  font-family: 'Inter-SemiBold';
  color: #1d2e88;
`
export const Hr = styled.hr`
  color: #22222280;
`
export const ViewAll = styled.button`
  outline: none;
  border: none;
  background: none;
  font-size: 16px;
  line-height: 19px;
  font-family: 'Inter-SemiBold';
  display: block;
  margin: auto;
  cursor: pointer;
  color: #1d2e88;
`
export const SubCard = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardData = styled.div`
  display: flex;
  flex-direction: column;
`
export const OutlineWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-self: center;
`
export const ImageWrapper = styled.div`
  display: flex;
  gap: 8px;
`
export const ShowHeading = styled.div`
  font-family: 'Inter-Medium';
  font-style: normal;
  font-size: 14px;
  margin-top: -20px;
  color: #000000;
`
export const PageWrapper = styled.div`
  display: flex;
  padding: 45px;
  justify-content: space-between;
  z-index: 1;
  background: #fafafa;
  position: relative;
`
export const BoxWrapper = styled.div<IActive>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ active }) => (active ? '#1d2e88' : '')};
  border-radius: 6px;
  width: 100%;
  min-width: 40px;
  height: 40px;
  .active {
    fill: white;
  }
`
export const DiceWrapper = styled.div`
  border: 2px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d2e88;
  border-radius: 6px;
  width: 100%;
  min-width: 40px;
  height: 40px;
`
