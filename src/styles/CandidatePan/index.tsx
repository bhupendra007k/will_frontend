import styled from 'styled-components'
export const Container = styled.div``
export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 85px auto;
  padding: 0 25px;
`
export const HandleBar = styled.div`
  display: flex;
  max-height: 85px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  hr {
    width: 1px;
    border: none;
    height: 30px;
    background: #9090908c;
  }
`
export const LeftBar = styled.div`
  display: flex;
  grid-gap: 23px;
`
export const CandidateValue = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
  color: #909090;
  padding-top: 10px;
  p {
    color: #000;
    padding: 0 8px;
  }
`
export const ToggleSection = styled.div`
  display: flex;
  grid-gap: 10px;
  min-height: 30px;
  cursor: pointer;
`
export const StyledButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  &.display-switch {
    background-color: #fff;
  }
  &.active {
    background: #254499;
  }
`
export const Icon = styled.img`
  width: 25px;
  height: 25px;
`

export const SwitchingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 10px;
  border-radius: 8px;
  min-height: 40px;
  min-width: 320px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  .button-switch {
    width: 152px;
    border: none;
    cursor: pointer;
    color: #909090;
    border-radius: 8px;
    min-height: 32px;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0);
  }
  .active {
    background-color: #254499;
    font-weight: 500;
    color: #fff;
  }
`
export const DataDisplay = styled.div`
  max-width: 1920px;
  overflow: auto;
`
