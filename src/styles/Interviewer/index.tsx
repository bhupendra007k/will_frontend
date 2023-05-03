import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background: #fafafa;
`
export const Container = styled.div`
  width: 100%;
  z-index: 1;
  padding: 0px 12px;
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
export const ContainerWrapper = styled.div`
  background-color: #fff;
  .ant-table-tbody {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    font-family: 'Inter-Medium';
    color: #000000;
  }
`
export const EllipseImg = styled.img`
  position: absolute;
  right: 1px;
  top: 92px;
  z-index: -3;
`
export const EllipseImgTwo = styled.img`
  position: absolute;
  right: 1px;
  bottom: 1px;
`
export const ContentWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #ffffff;
  z-index: 3;
  border-radius: 20px;
`
