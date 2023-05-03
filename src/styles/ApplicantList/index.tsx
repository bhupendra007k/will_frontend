import styled from 'styled-components'
import gradient from 'assets/images/gradient.png'

export const Applicant = styled.strong`
  color: #000000;
  font-size: 21px;
  display: flex;
`
export const Preferences = styled.p`
  color: #8a8a8a;
  font-size: 18px;
`
export const Buttons = styled.div`
  display: flex;
  gap: 15px;
`
export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${gradient});
  gap: 20px;
  padding-left: 50px;
  padding-top: 80px;
  padding-right: 50px;

  .button {
    border: 1px solid #000000a6;
    background: none;
    border-radius: 25px;
    opacity: 0.65;
    color: #000000;
    font-size: 15px;
    font-weight: 10;
  }
  .ant-table-row {
    gap: 30px;
  }
  .ant-table-content {
    top: 500px;
    border-radius: 30px;
    background: #ffffff;
  }

  .ant-table-row {
  }
  .ant-select-selector {
    border-radius: 200px;
  }
`

export const FilterData = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TableHeading = styled.div`
  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
  display: flex;
  gap: 20px;
`
export const Select = styled.select`
  border-radius: 20px;
  border: 1px solid #1d2e88;
  width: 150px;
  height: 30px;
  text-align: center;
`
export const Option = styled.option``
