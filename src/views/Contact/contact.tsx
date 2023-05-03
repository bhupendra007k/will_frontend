import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema } from 'components/Utils/contactSchema'

import Button from 'components/Button'
import Navbar from 'components/Navbar'
import TextInput from 'components/FormElements/textInput'

import Image from 'assets/images/contactImage.png'
import Facebook from 'assets/images/facebook.png'
import Instagram from 'assets/images/instagram.png'
import Linkedin from 'assets/images/linkedin.png'
import Top from 'assets/images/topImg.png'

import {
  Section,
  Container,
  MainHeading,
  MainContainer,
  ContentContainer,
  Content,
  ContentParagraph,
  ImageContainer,
  FormContainer,
  Form,
  SubHeading,
  AddressContainer,
  AddressHeading,
  AddressInformation,
  AddressInformationContainer,
  Paragarph,
  ImageIcon,
  SocialMediaIcons,
  BackgroundImage,
  MapContainer,
  FieldWrapper,
  FieldContainer,
  SocialMediaHandles,
  ContactInfoWrapper,
} from 'styles/HomePage/contact'
import { ErrorMessage } from 'styles/FormElements'

interface IFormInputs {
  firstName: string
  lastName: string
  email: string
  message: string
}

const Contact = () => {
  function scrollView(refName: any) {
    refName
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({ resolver: yupResolver(Schema) })

  const onSubmit: SubmitHandler<IFormInputs> = () => {
    reset()
  }

  return (
    <Section>
      <Navbar scrollView={(refName: string) => scrollView(refName)} />
      <BackgroundImage src={Top}></BackgroundImage>
      <MainContainer>
        <Container>
          <MainHeading>Lets Get in Touch With Us</MainHeading>
          <ContentContainer>
            <Content>
              We operate in an industry built on trust. This can only be achieved through communication and experienced
              support – from the first contact past your ten-year anniversary.
            </Content>
            <ContentParagraph>
              Have questions about our services? Our entire team receives specialized training regularly to ensure
              you’re receiving the best information possible. From basic questions to complex compliance enquiries,
              we’re here to help!
            </ContentParagraph>
          </ContentContainer>
        </Container>
        <ImageContainer>
          <img src={Image}></img>
        </ImageContainer>
      </MainContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldWrapper>
            <FieldContainer>
              <SubHeading>First Name</SubHeading>
              <TextInput control={control} name="firstName" type="text" placeholder="Your First Name"></TextInput>
              <ErrorMessage>{errors.firstName && <div>{errors.firstName.message}</div>}</ErrorMessage>
            </FieldContainer>
            <FieldContainer>
              <SubHeading>Last Name</SubHeading>
              <TextInput control={control} name="lastName" type="text" placeholder="Your Last Name"></TextInput>
              <ErrorMessage>{errors.lastName && <div>{errors.lastName.message}</div>}</ErrorMessage>
            </FieldContainer>
            <FieldContainer>
              <SubHeading>Email</SubHeading>
              <TextInput control={control} name="email" type="text" placeholder="Your Email"></TextInput>
              <ErrorMessage>{errors.email && <div>{errors.email.message}</div>}</ErrorMessage>
            </FieldContainer>
            <FieldContainer>
              <SubHeading>Message</SubHeading>
              <TextInput
                control={control}
                name="message"
                type="text"
                placeholder="Write Your Message"
                className="message"
              ></TextInput>
              <ErrorMessage>{errors.message && <div>{errors.message.message}</div>}</ErrorMessage>
            </FieldContainer>
          </FieldWrapper>
          <Button label="Send Message" type="submit" />
        </Form>
        <AddressContainer>
          <AddressHeading>Our Office</AddressHeading>
          <AddressInformation>
            <AddressInformationContainer>
              <ContactInfoWrapper>
                <SubHeading>Office Address</SubHeading>
                <Paragarph>CITY HEART, SCO 40-41- D, Third Floor, Kharar, Punjab 140301</Paragarph>
              </ContactInfoWrapper>
              <ContactInfoWrapper>
                <SubHeading>Our Email</SubHeading>
                <Paragarph>info@thewitslab.com</Paragarph>
              </ContactInfoWrapper>
              <ContactInfoWrapper>
                <SubHeading>Phone No.</SubHeading>
                <Paragarph>+1 805 203-6862</Paragarph>
              </ContactInfoWrapper>
              <SocialMediaHandles>
                <SubHeading>Social Media</SubHeading>
                <SocialMediaIcons>
                  <ImageIcon src={Facebook} alt="facebook"></ImageIcon>
                  <ImageIcon src={Instagram} alt="instagram"></ImageIcon>
                  <ImageIcon src={Linkedin} alt="linkedin"></ImageIcon>
                </SocialMediaIcons>
              </SocialMediaHandles>
            </AddressInformationContainer>
          </AddressInformation>
        </AddressContainer>
      </FormContainer>
      <MapContainer>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.0318408265416!2d76.65081431526876!3d30.74560709206279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef589e69fb9f%3A0x7d1a26cb882e8690!2sWits%20Innovation%20Lab!5e0!3m2!1sen!2sin!4v1649159051194!5m2!1sen!2sin"></iframe>
      </MapContainer>
    </Section>
  )
}

export default Contact
