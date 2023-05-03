import styled from 'styled-components'
import Box from 'assets/images/box.png'
import Box1 from 'assets/images/box1.png'
import Box2 from 'assets/images/box2.png'
import Ellipse from 'assets/images/ellipse.png'

export const Section = styled.div`
  max-width: 100%;
  background: url(${Ellipse});
  background-repeat: no-repeat;
  background-size: 400px 100vh;
`
export const MainHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 40px;
  padding-top: 85px;
  font-family: 'Inter-SemiBold';
`
export const FeedbackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 70px 0px;
  justify-content: center;
`
export const FeedbackColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${Box});
  background-repeat: no-repeat;
  width: 351px;
  height: 394px;
`
export const ImageSection = styled.div`
  align-self: center;
`
export const Image = styled.img`
  align-items: center;
  padding-top: 20px;
`
export const CommaImage = styled.img`
  display: flex;
  padding: 14px 20px;
`
export const ContentContainer = styled.div`
  align-self: center;
  max-width: 222px;
  padding-left: 27px;
  font-size: 11px;
  font-family: 'Inter-Medium';
`
export const ContentHeading = styled.h3`
  align-self: center;
  padding-top: 15px;
  font-size: 11px;
  font-family: 'Inter-Bold';
`
export const ContentSubHeading = styled.p`
  align-self: center;
  padding-left: 20px;
  font-size: 11px;
  font-family: 'Inter-Medium';
`
export const FeedbackColumnMiddle = styled.div`
  position: relative;
  width: 487px;
  height: 573px;
  background: url(${Box1});
  background-repeat: no-repeat;
  background-size: cover;
`
export const PersonImage = styled.img`
  position: absolute;
  padding-left: 180px;
  margin-top: -35px;
`
export const CommaIcon = styled.img`
  padding-top: 95px;
  padding-left: 217px;
`
export const ContentParagraph = styled.div`
  align-items: center;
  max-width: 398px;
  padding-left: 121px;
  padding-top: 22px;
  font-size: 16px;
  font-family: 'Inter-Regular';
`
export const ParaHeading = styled.h3`
  padding-left: 177px;
  padding-top: 34px;
  font-size: 18px;
  font-family: 'Inter-Bold';
`
export const ParaSubHeading = styled.p`
  padding-left: 132px;
  font-size: 18px;
  font-family: 'Inter-Regular';
`
export const FeedbackColumnRight = styled.div`
  width: 380px;
  height: 400px;
  background: url(${Box2});
  background-repeat: no-repeat;
  background-size: cover;
`
export const ImageIcon = styled.img`
  align-self: center;
  padding-left: 138px;
  padding-top: 19px;
`
export const CommaImageIcon = styled.img`
  display: flex;
  padding-left: 165px;
  padding-top: 20px;
`
export const ReviewContainer = styled.div`
  align-self: center;
  max-width: 286px;
  padding-left: 100px;
  padding-top: 20px;
  font-size: 11px;
  font-family: 'Inter-Medium';
`
export const ReviewHeading = styled.h3`
  padding-left: 136px;
  padding-top: 10px;
  font-size: 11px;
  font-family: 'Inter-Bold';
`
export const ReviewSubHeading = styled.p`
  padding-left: 122px;
  font-size: 11px;
  font-family: 'Inter-Medium';
`
export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
`
export const ArrowImage = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 35px;
`
