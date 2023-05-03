import styled from 'styled-components'

export const FeedbackContainer = styled.div`
  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(62, 73, 84, 0.04);
  border-radius: 20px;
`
export const FeedbackWrapper = styled.div`
  padding: 20px 10px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(62, 73, 84, 0.04);
  border-radius: 20px;
`
export const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 55px;
  align-item: center;
`
export const FeedbackHeading = styled.div`
  display: flex;
  align-item: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #000000;
`
export const ImageContainer = styled.div`
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
  background-size: cover;
`
export const ThreeDot = styled.img`
  height: 21px;
`

export const CollapseContainer = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;

  .ant-collapse {
    border: none;
    background: white;
  }
`
export const FeedbackDate = styled.div`
  background: #dce2ff;
  border-radius: 20px;
  width: 100%;
  max-width: 30%;
  display: flex;
  justify-content: center;
  align-item: center;
  align-self: center;
  text-align: center;
`
export const RatingStarsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const StarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const StarImageContainer = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
`
export const RatingStarsHeading = styled.p`
  text-align: center;ls
`
export const StarImage = styled.img`
  height: 58px;
`
