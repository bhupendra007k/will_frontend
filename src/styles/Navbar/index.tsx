import styled from 'styled-components'
export const MainContainer = styled.div`
  padding: 39px 135px 0px 135px;
  max-width: 100%;
  position: sticky;
  top: 0;
  z-index: 4;
`
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 17px;
  background-color: rgba(255, 255, 255, 0.481);
  backdrop-filter: blur(54px);
  padding: 25px;
  @media (max-width: 1124px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    padding: 20px 30px 0px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 1440px) {
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 554px) {
    display: flex;
    padding: 19px 20px;
    align-items: center;
    justify-content: space-between;
  }
`
export const LogoContainer = styled.img`
  height: 74px;
  width: 143px;
  background-size: cover;
  cursor: pointer;
`
export const Menu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1124px) {
    display: none;
  }
`
export const List = styled.li`
  width: 544px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 25px;
  .list-items:hover {
    color: grey;
  }

  @media (max-width: 1124px) {
    display: grid;
    justify-content: space-around;
  }
`

export const ListItems = styled.div`
  text-decoration: none;
  font-family: 'Inter-Medium';
  font-size: 18px;
  cursor: pointer;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &.createAccount {
    @media (max-width: 1124px) {
      display: none;
    }
  }
`
export const HamburgerMenu = styled.div`
  position: relative;
  @media (min-width: 1124px) {
    display: none;
  }
`
export const MobileMenu = styled.div`
  @media (min-width: 1124px) {
    display: none;
  }
`
export const MenuButton = styled.span`
  text-decoration: none;
`
export const EmptyIndex = styled.div`
  position: absolute;
  background: #f3cb69a1;
  height: 800px;
  width: 800px;
  left: 67%;
  top: -500px;
  background: radial-gradient(#f5d279e1, #f5d279e1, #fff, #fff, #fff);
  filter: blur(80px);
  opacity: 50%;
  z-index: -1;
`
