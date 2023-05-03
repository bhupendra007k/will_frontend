import styled from 'styled-components'

export const ModalWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  width: 150px;
  height: 250px;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  right: -2px;
  z-index: 1;
  flex-direction: column-reverse;
  justify-content: flex-end;
  flex-wrap: wrap;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);

  :target {
    line-height: 1.5;
    padding-top: 1em;
    padding-bottom: 1em;
    color: black;
  }
`

export const ListWrapper = styled.div`
  display: grid;
  justify-content: space-evenly;
  padding-top: 10px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`
export const Span = styled.span`
  text-align: center;
  width: 30px;
  height: 30px;
  transition: width 0.5s, height 0.5s;
  animation-duration: 1s;
  :hover {
    display: flex;
    justify-content: center;
    width: 100px;
    height: 32px;
    background: #ffe695;
    border: 1px solid #fff;
  }
`
export const CancelButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`
export const CancelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const CreateAccount = styled.button`
  max-width: 117px;
  width: 100%;
  border-radius: 10px;
  padding: 8px;
  border: none;
  outline: none;
  background-color: #1d2e88;
  color: white;
  transition: width 0.1s, height 0.1s;
  animation-duration: 1s;
  :hover {
    padding: 9px;
    background-color: #102694;
  }
`
