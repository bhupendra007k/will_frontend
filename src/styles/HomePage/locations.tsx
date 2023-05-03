import styled from 'styled-components'

const Container = styled.div`
  background: #f8f6ef 0% 0% no-repeat padding-box;
  padding: 110px 135px;
`
const Grid1 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  margin-bottom: 40px;
`
const ImageWrapper = styled.div`
  position: relative;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale();
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale();
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale();
  transition: all 200ms ease-in;
  transform: scale();
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    border-radius: 50px;
    z-index: 2;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.1);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.1);
    transition: all 200ms ease-in;
    transform: scale(1.1);
  }
  img {
    width: 100%;
    border-radius: 50px;
  }
  .image-text {
    position: absolute;
    top: 44%;
    left: 40%;
    font-family: 'Inter-Regular';
    font-size: 20px;
    color: #ffffff;
  }
`
const Text = styled.div`
  font-family: 'Inter-SemiBold';
  font-size: 40px;
  color: #141003;
  max-width: 308px;
`
const Grid2 = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 50px;
  margin-bottom: 50px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35px;
`

export { Container, Text, Grid1, Grid2, ImageWrapper, ButtonWrapper }
