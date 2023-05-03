import styled from 'styled-components'
export const Container = styled.div`
  max-width: 590px;
  border-radius: 4px;
  background: linear-gradient(90deg, #5f5f5f4d, #b0b0b034);
  padding: 1px;
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, max-content);
  border-radius: 4px;
  border: 1px linear;
  background-color: #fff;
  align-items: center;
  grid-gap: 15px;
  padding-right: 15px;
`
export const SideBar = styled.div`
  min-width: 4px;
  min-height: 53px;
  background-color: #419e6a;
  border-radius: 8px;
`
export const ImageSection = styled.div``
export const Candidate = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
`
export const MainHeading = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`
export const SubHeading = styled.h3`
  font-size: 12px;
  font-weight: 500;
  opacity: 50%;
  margin: 0;
`
export const Timming = styled.div`
  padding: 0 14px;
`
export const Interviewer = styled.div``
export const FeedBack = styled.button`
  background: none;
  border: 1px solid #1d2e88;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #1d2e88;
  min-height: 34px;
`
export const TextData = styled.p`
  max-width: 590px;
`
