import styled from 'styled-components'
export const ModalWrapper = styled.div``

export const SuccessfullySent = styled.div`
  padding: 30px 61px;
  margin: auto auto;
  max-width: 555px;
  border-radius: 21px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #fff;
  display: grid;
  justify-content: center;
  position: absolute;
  font-family: 'Inter-Medium';
  color: #272727d9;
  left: 38%;
  top: 35%;
  div {
    text-align: center;
    .witsicon {
      max-width: 118px;
    }
  }
  .closebutton {
    display: flex;
    justify-content: flex-end;
    button {
      border: none;
      background: none;

      img {
        max-width: 15px;
      }
    }
  }
  .ContinueButton {
    background-color: #1d2e88;
    border: none;
    border-radius: 12px;
    margin-top: 35px;
    max-width: 201px;
    min-width: 201px;
    max-height: 50px;
    min-height: 50px;
    color: #fff;
  }
  .SuccessText {
    font-weight: bold;
    line-height: 60px;
    font-size: 24px;
    color: #1d2e88;
  }
  .ResendText {
    color: #1d2e88;
    button {
      border: none;
      background: none;
    }
  }
  .ErrorText {
    font-weight: bold;
    line-height: 60px;
    font-size: 24px;
    color: #f21e1e;
  }
  .TryButton {
    background-color: #f21e1e;
    border: none;
    border-radius: 12px;
    margin-top: 35px;
    max-width: 201px;
    min-width: 201px;
    max-height: 50px;
    min-height: 50px;
    color: #fff;
  }
`
