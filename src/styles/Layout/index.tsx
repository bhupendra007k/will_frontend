import styled from 'styled-components'
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  z-index: -1;
  max-width: 1920px;
  overflow: hidden;
`
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 32px;
`
export const GradientIndex = styled.div`
  background: radial-gradient(#f7c7444f, #f2dfad, #f2dfad5e, #ffffff1a, #ffffff1a);
  position: absolute;
  filter: blur(18px);
  left: 1170px;
  bottom: 710px;
  width: 670px;
  height: 400px;
`
export const GradientIndexBottom = styled.div`
  background: radial-gradient(#f7c7444f, #f2dfad, #f2dfad5e, #ffffff1a, #ffffff1a);
  position: absolute;
  filter: blur(18px);
  left: 1350px;
  top: 710px;
  width: 670px;
  height: 400px;
`
export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fafafa;
  gap: 30px;
`
