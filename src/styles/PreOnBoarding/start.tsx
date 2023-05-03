import styled from 'styled-components'

export const ContentWrapper = styled.div`
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .ant-table-thead > tr > th {
    border-bottom: none;
  }
  .ant-table-tbody {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    font-family: 'Inter-Medium';
    color: #000000;
  }
  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    width: 0px;
  }
  .ant-table-pagination.ant-pagination {
    display: none;
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  padding-left: 10px;
`
export const MainContentWrapper = styled.div`
  display: flex;
  gap: 36px;

  align-items: center;
`
export const MainContent = styled.div`
  font-family: 'Inter-SemiBold';
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`
export const MainContentRight = styled.div`
  display: flex;
  gap: 18px;
`

export const SeachInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 382px;
  background: #fefefe;
  border: 1px solid #00000036;
  padding: 11px 26px;
  border-radius: 20px;
`
export const SearchMain = styled.input`
  border: none;
  outline: none;
  font-size: 12px;
  line-height: 15px;
  max-width: 300px;
  width: 100%;
  color: #000000;
  font-family: 'Inter-Regular';
`
export const SearchImg = styled.img`
  max-width: 18px;
`
