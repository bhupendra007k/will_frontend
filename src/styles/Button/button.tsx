import styled from 'styled-components'

interface IStyledButton {
  variant?: 'contained' | 'text' | 'outline' | 'post' | 'cancel'
}
const getButtonStyles = ({ variant }: IStyledButton) => {
  switch (variant) {
    case 'contained':
      return `
      background: #1d2e88;
      color: #fff;
      border: none;
      width: 450px;
      font-size: 18px;
      height: 64px;
      font-family: 'Inter-Bold';
      :hover {
        color: #d4cfcf;
        background: #06145b;
      }
      `
    case 'outline':
      return `
      width: 210px;
      height: 64px;
      background: #1d2e88;
      border-radius: 25px;
      cursor: pointer;
      opacity: 1;
      border: none;
      color: white;
      font-size: 18px;
      font-family: 'Inter-Medium';
      cursor: pointer;
      :hover {
        opacity:0.8;
      }
      `
    case 'text':
      return `
      color: #1d2e88;
      text-decoration: underline;
      font-weight: 600;
      cursor: pointer;
      font-family: 'Inter-Regular'; 
      border:none;
      background:none;
      :hover {
        color: #06145b;
      }
      `
    case 'post':
      return `
      font-family: 'Inter-Bold';
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      background: #1d2e88;
      padding: 12px 36px;
      border-radius: 20px;
      border: none;
      outline: none;
      cursor: pointer;
      z-index: 1;
      :hover {
        opacity:0.8;
      }
      `
    case 'cancel':
      return `
      outline: none;
      font-size: 16px;
      font-family: 'Inter-Bold';
      color: #1d2e88;
      border: none;
      background: #ffffff;
      cursor: pointer;
      z-index: 1;
      float:right;
      :hover {
        opacity:0.8;
      }
      `

    default:
      return `
      background: rgba(29, 46, 136, 1);
      color: #fff;
      border: none;
  `
  }
}

export const StyledButton = styled.button<IStyledButton>`
  border-radius: 16px;
  cursor: pointer;
  ${({ variant }) => getButtonStyles({ variant })};
`
