import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(536px, 1fr));
  grid-gap: 40px;
  margin: 0 auto;
  background: #fafafa;
  justify-content: center;
`
export const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4.08092px 4.08092px rgba(62, 73, 84, 0.04);
  border-radius: 20.4046px;
`
export const ActivityContainer = styled.div`
  display: flex;
`
export const ActivityHeading = styled.div`
  font-size: 20px;
  font-family: 'Inter-SemiBold';
`
export const DateWrapper = styled.div``

export const SourceHead = styled.div`
  font-family: 'Inter-SemiBold';
  font-style: normal;
  font-size: 24.49px;
  color: #000000;
`
