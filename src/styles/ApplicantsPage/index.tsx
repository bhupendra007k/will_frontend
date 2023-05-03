import styled from 'styled-components'

export const ApplicantsContainer = styled.div`
  padding: 24px 39px;
  /* max-width: 1181px; */
  /* margin: 0 auto; */
  p,
  h1 {
    margin: 0;
  }
`

export const TopContainerWrapper = styled.div`
  max-width: 1141px;
`

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;

  h1 {
    font-size: 16px;
    max-width: 186px;
    min-height: 23px;
    letter-spacing: 0px;
    line-height: 23px;
    text-align: left;
  }
  p {
    color: #8a8a8a;
  }
`
export const TopButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  button {
    border-radius: 15px;
    border: none;
    background-color: #c5cdfa;
    color: #1d2e88;
    min-width: 96px;
    min-height: 37px;
  }
  .AllButton {
    background-color: #1d2e88;
    color: #ffffff;
    min-width: 55px;
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
export const ApplicationPagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  color: #1d2e88;
  column-gap: 30px;

  .color {
    color: #000;
  }

  div {
    display: flex;
  }

  button {
    background: none;
    border: none;
    border-radius: 27px;
    min-height: 39px;
    min-width: 122px;
  }
`
export const PageSection = styled.div`
  display: flex;
  column-gap: 20px;
`

export const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  border: none;
  border-radius: 27px;
  min-width: 169px;

  .page3 {
    display: flex;
    justify-content: center;
    align-items: center;
    border: #1d2e88;
    color: #fff;
    background: #1d2e88;
    border-radius: 50%;
    min-width: 30px;
    min-height: 30px;
  }
`
