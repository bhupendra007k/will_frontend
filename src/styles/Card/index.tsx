import styled from 'styled-components'
import { ICardProps } from 'components/Card'
export const CardContainer = styled.div<ICardProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 255px;
  width: 100%;
  gap: 10px;
  border-radius: 20px;
  background-color: ${({ color }) => (color ? color : 'none')};
  border: 0;
  position: relative;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale();
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale();
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale();
  transition: all 200ms ease-in;
  transform: scale();

  :hover {
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
`

export const ImageContainer = styled.div`
  padding-left: 20px;
`

export const TitleContainer = styled.div`
  display: grid;
  padding: 30px 8px;
  gap: 5px;
`
export const Title = styled.div<ICardProps>`
  font-family: 'Inter-Medium';
  font-size: 14px;
  text-align: right;
  color: ${({ color }) => (color ? '#fff' : '#000')};
`
export const SubTitle = styled.div<ICardProps>`
  font-family: 'Inter-SemiBold';
  font-size: 34px;
  color: ${({ color }) => (color ? '#fff' : '#969696')};
  mix-blend-mode: luminosity;
  text-align: right;
`
