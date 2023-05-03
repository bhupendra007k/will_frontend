import React from 'react'
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
  Button,
} from 'styles/Inbox'
import { inboxData } from 'components/Inbox/inboxData'

const Inbox = (props: any) => {
  const closeModal = () => props.set(false)

  return (
    <MainContainer>
      <MainHead>
        <Heading>Inbox</Heading>
        <SubHeading>View All</SubHeading>
      </MainHead>
      {inboxData.map((e, index) => (
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
      <Button onClick={() => closeModal()}>Cancel</Button>
    </MainContainer>
  )
}

export default Inbox
