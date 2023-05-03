import React from 'react'
import { Container, Text, ImageWrapper, Grid1, Grid2, ButtonWrapper } from 'styles/HomePage/locations'
import Chandigarh from 'assets/images/chandigarh.jpg'
import Jaipur from 'assets/images/jaipur.jpg'
import Agra from 'assets/images/agra.jpg'
import Delhi from 'assets/images/delhi.jpg'
import Mumbai from 'assets/images/mumbai.jpg'
import Button from 'components/Button'

const AvailableLocations = () => {
  return (
    <>
      <Container>
        <Grid1>
          <Text>Jobs Available in 80+ Cities</Text>
          <ImageWrapper>
            <img src={Chandigarh} alt="Chandigarh-image" />
            <p className="image-text">Chandigarh</p>
          </ImageWrapper>
          <ImageWrapper>
            <img src={Jaipur} alt="Jaipur-image" />
          </ImageWrapper>
        </Grid1>
        <Grid2>
          <ImageWrapper>
            <img src={Agra} alt="Agra-image" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={Delhi} alt="Delhi-image" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={Mumbai} alt="Mumbai-image" />
          </ImageWrapper>
        </Grid2>
        <ButtonWrapper>
          <Button label="View More" />
        </ButtonWrapper>
      </Container>
    </>
  )
}

export default AvailableLocations
