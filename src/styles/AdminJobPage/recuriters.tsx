import styled from 'styled-components'

export const JobsContentSub2 = styled.div`
  border-left: 1px solid #787486;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const List = styled.img``

export const DataWrapper = styled.div`
  padding: 20px 30px 0 30px;

  .ant-table-thead {
  }
  .ant-table-tbody {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    font-family: 'Inter-Medium';
    color: #000000;
  }
  .ant-table-thead > tr > th {
    border: none;
    background: #f5f6f9;
    font-family: 'Inter-SemiBold';
    font-size: 16px;
    line-height: 19px;
    color: #111111;
  }
  .ant-table-pagination.ant-pagination {
    margin: 0px;
    margin-top: 16px;
  }
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    width: 0px;
  }
`
export const EllipseImg = styled.img`
  position: absolute;
  right: 20px;
  top: 111px;
  z-index: 0;
`
export const EllipseImgTwo = styled.img`
  position: absolute;
  right: 1px;
`
export const MaindataWrapper = styled.img``
