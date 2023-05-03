import React from 'react'
import { ImageContainer, CardContainer, TitleContainer, Title, SubTitle } from 'styles/Card'
export interface ICardProps {
  heading?: string
  paragraph?: number
  src?: string
  background?: string
}
const Card = ({ src, heading, paragraph, background }: ICardProps) => (
  <CardContainer color={background}>
    <ImageContainer>
      <img src={src} alt="my images" />
    </ImageContainer>
    <TitleContainer>
      <Title color={background}>{heading}</Title>
      <SubTitle color={background}>{paragraph}</SubTitle>
    </TitleContainer>
  </CardContainer>
)

export default Card
