import React from 'react'
import 'antd/dist/antd.min.css'
import Three from 'assets/images/three.png'
import { data, pannelData } from 'components/FeedbackContainer/data'
import { Collapse, Divider } from 'antd'
import {
  FeedbackContainer,
  FeedbackWrapper,
  FeedbackHeader,
  FeedbackHeading,
  ImageContainer,
  ThreeDot,
  CollapseContainer,
  FeedbackDate,
  RatingStarsContainer,
  StarsWrapper,
  StarImageContainer,
  RatingStarsHeading,
  StarImage,
} from 'styles/Feedback'

const { Panel } = Collapse
const Feedback = () => {
  return (
    <FeedbackContainer>
      <FeedbackWrapper>
        <FeedbackHeader>
          <FeedbackHeading>Can you help us with your feedbck?</FeedbackHeading>
          <ImageContainer>
            <ThreeDot src={Three} alt=""></ThreeDot>
          </ImageContainer>
        </FeedbackHeader>
        <Divider />
        <CollapseContainer>
          <FeedbackDate>
            <p>Submitted on 15th April, 2022 11:02 AM</p>
          </FeedbackDate>
          <Collapse accordion>
            {pannelData.map((e: any, index) => (
              <Panel header={e.header} key={index}>
                <RatingStarsContainer>
                  {data.map((e: any, index) => (
                    <StarsWrapper key={index}>
                      <StarImageContainer>
                        <StarImage src={e.src} alt="Image" />
                      </StarImageContainer>

                      <RatingStarsHeading>{e.Paragraph}</RatingStarsHeading>
                    </StarsWrapper>
                  ))}
                </RatingStarsContainer>
              </Panel>
            ))}
          </Collapse>
        </CollapseContainer>
      </FeedbackWrapper>
    </FeedbackContainer>
  )
}

export default Feedback
