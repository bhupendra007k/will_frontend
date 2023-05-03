import styled from 'styled-components'
export const SearchArea = styled.div`
  display: flex;
  max-width: 609px;
  width: 100%;
  padding-left: 10px;
  background-color: white;
  margin-top: 26px;
  border-radius: 15px;
  .button:hover {
    opacity: 0.6;
  }
`
export const Input = styled.input`
  width: 285px;
  height: 73px;
  outline: none;
  font-size: 18px;
  font-family: 'Inter-Regular';
  padding-left: 4px;
  border: 0.5px solid black;
  border: none;
  background-color: white;
  opacity: 0.2;
`
export const BtnContainer = styled.div`
  display: flex;
  margin-left: 124px;
`
export const Button = styled.button`
  background-repeat: no-repeat;
  width: 196px;
  height: 77px;
  border-radius: 15px;
  border: none;
  font-size: 18px;
  background-color: #f7c744;
  cursor: pointer;
  font-family: 'Inter-SemiBold';
  font-size: 18px;
`
