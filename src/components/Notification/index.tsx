import React from 'react'
import Button from 'components/Button'
import {
  MainContainer,
  Card,
  CardImage,
  CardHeading,
  CardDate,
  CardParagraph,
  CardData,
  SubCard,
  MainHead,
  Heading,
  SubHeading,
} from 'styles/Notification'
import { notificationData } from 'components/Notification/notificationData'

const Notification = (props: any) => {
  const closeModal = () => props.set(false)

  return (
    <MainContainer>
      <MainHead>
        <Heading>Notification</Heading>
        <SubHeading>View All</SubHeading>
      </MainHead>
      {notificationData.map((e, index) => (
        <Card key={index}>
          <CardImage src={e.src} alt="src"></CardImage>
          <SubCard>
            <CardData>
              <CardHeading>{e.heading}</CardHeading>
              <CardParagraph>{e.paragraph}</CardParagraph>
            </CardData>
            <CardDate>{e.date}</CardDate>
          </SubCard>
        </Card>
      ))}
      <Button label="Cancel" variant="cancel" handleClick={() => closeModal()} />
    </MainContainer>
  )
}

export default Notification
