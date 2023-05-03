import styled from 'styled-components'
export const Container = styled.div``
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, max-content);
  grid-template-rows: 59px 100vh;
  grid-column-gap: 40px;
  cursor: pointer;
`
export const CardWrapper = styled.div`
  display: flex;
  grid-gap: 17px;
  border: 1px solid #e5e5e5;
  min-width: 232px;
  min-height: 55px;
  border-radius: 12px;
  align-items: center;
  border-left: 4px solid #419e6a;
  padding: 0 18px;
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 55px repeat(autofit, 95px);
  grid-gap: 17px;
`
export const Header = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
`
export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`
export const Title = styled.h3``
export const CandidateCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 35px;
  min-height: 24px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
`
export const ProfileContainer = styled.div`
  display: flex;
  grid-gap: 17px;
`
export const ProfileWrapper = styled.div`
  display: grid;
  grid-template-rows: 59px 36px;
  min-width: 232px;
  max-height: 95px;
  border-radius: 12px;
  border: 1px solid #ececec;
`
export const ProfileCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 28px 0 15px;
  border-bottom: 1px solid #e5e5e5;
  max-height: 59px;
  align-items: center;
`
export const DetailSection = styled.div`
  display: flex;
  grid-gap: 20px;
`
export const ProfilePicture = styled.img`
  max-width: 35px;
  max-height: 35px;
`
export const UserName = styled.h3``
export const Dot = styled.img`
  max-width: 4px;
  max-height: 18px;
`
export const ProfileRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 15px;
`
export const Text = styled.p`
  margin: 0;
`
export const Files = styled.p`
  margin: 0;
`
export const RatingSection = styled.div``
export const Days = styled.div``
