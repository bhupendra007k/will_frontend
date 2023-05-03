import styled from 'styled-components'

export const Button = styled.button`
  background-repeat: no-repeat;
  width: 77px;
  height: 77px;
  border-radius: 15px;
  border: none;
  background-color: #1d2e88;
  cursor: pointer;
  flex-wrap: wrap;
`
export const SearchArea = styled.div`
  display: flex;
  max-width: 486px;
  width: 100%;
  min-width: 329px;
  background-color: white;
  margin-top: 26px;
  border-radius: 15px;

  .button:hover {
    opacity: 0.6;
  }
`
export const Input = styled.input`
  max-width: 526px;
  width: 100%;
  display: flex;
  border-radius: 15px;
  padding-left: 25px;
  height: 73px;
  outline: none;
  font-size: larger;
  border: 0.5px solid black;
  border: none;
  font-family: 'Inter-Regular';
  flex-wrap: wrap;
  ::placeholder {
    font-family: 'Inter-Regular';
  }
`
export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
