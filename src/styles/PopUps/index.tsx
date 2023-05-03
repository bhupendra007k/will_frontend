import styled from 'styled-components'

interface IStyledPopup {
  variant?: 'success' | 'error' | 'warning'
}
const getPopupStyles = ({ variant }: IStyledPopup) => {
  switch (variant) {
    case 'success':
      return `
      background: #03A65A;
      `
    case 'error':
      return `
      background: #F64B3C;
      `
    case 'warning':
      return `
      background: #FFB446;
`

    default:
      return `
      background: #03A65A;
      color: #fff;
      border: none;
  `
  }
}

export const Wrapper = styled.div<IStyledPopup>`
  position: fixed;
  right: 0;
  top: 75px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  max-width: 300px;
  min-height: 80px;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  ${({ variant }) => getPopupStyles({ variant })};
`
export const Icon = styled.div`
  display: grid;
  justify-content: center;
`
export const Header = styled.div`
  display: grid;
  align-items: center;
  max-height: 60px;
  justify-content: center;
  color: #fff;
`
export const Heading = styled.div`
  font-family: 'Inter-SemiBold';
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`
export const SubHeading = styled.div`
  font-size: 10px;
  line-height: 13px;
  font-weight: 600;
  font-family: 'Inter-SemiBold';
`
export const CancelField = styled.button`
  display: grid;
  border: none;
  background: none;
  justify-content: center;
`
