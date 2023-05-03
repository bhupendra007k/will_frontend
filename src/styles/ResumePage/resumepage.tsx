import styled from 'styled-components'

export const ResumeWrapper = styled.div`
  padding: 35px 35px 357px 35px;
  box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.2), 0 6px 20px 0 rgba(200, 200, 200, 0.19);
  border-radius: 20px;
  margin: 30px;
`

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  .resume-title {
    color: #1d2e88;
    font-size: 34px;
  }
  .resume-subtitle {
    color: #00000066;
    max-width: 612px;
  }
  .topButton {
    background-color: #1d2e88;
    border: none;
    border-radius: 12px;
    max-width: 169px;
    min-width: 169px;
    max-height: 52px;
    min-height: 52px;
    color: #fff;
  }
`
export const ButtonSection = styled.div`
  display: flex;
  gap: 12px;
`
export const MidSection = styled.div`
  margin-top: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .uploadText {
    color: #1d2e88;
    font-size: 20px;
    font-weight: 800;
    margin-left: 15px;
  }
`

export const TopRightButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  width: 100%;
  max-width: 125px;
  min-height: 37px;
  border: solid 1px #000;
  border-radius: 25px;
  flex-grow: 1;
  margin-right: 0;
  margin-left: auto;
  img {
    max-width: 15px;
  }
`
export const ResumeIcons = styled.div`
  display: flex;
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  img {
    max-width: 55px;
  }
`
