import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const MainHeading = styled.h1`
  max-width: 526px;
  width: 100%;
  justify-content: left;
  font-size: 56px;
  font-family: 'Inter-Bold';
  padding-top: 200px;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 71px;
  padding: 0px 135px;
`
export const ContentContainer = styled.div`
  max-width: 494px;
  width: 100%;
  font-size: 16px;
  font-family: 'Inter-Regular';
`
export const Content = styled.p`
  opacity: 0.65;
`
export const ContentParagraph = styled.p`
  display: flex;
  opacity: 0.65;
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  max-width: 493px;
  width: 100%;
  height: 571px;
  @media (max-width: 1024px) {
    align-items: center;
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 80px;
  padding: 100px 135px;
  .message {
    height: 200px;
  }
`
export const SubHeading = styled.h3`
  font-size: 24px;
  font-family: 'Inter-SemiBold';
`
export const AddressContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (max-width: 1024px) {
    padding-left: 120px;
  }
`
export const AddressHeading = styled.h2`
  font-size: 40px;
  font-family: 'Inter-SemiBold';
`
export const AddressInformation = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #00000033;
  border-radius: 15px;
  max-width: 462px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
`
export const AddressInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Paragarph = styled.p`
  display: flex;
  margin-top: -14px;
  font-size: 18px;
  font-family: 'Inter-Regular';
  color: #000000a6;
`
export const ImageIcon = styled.img`
  display: flex;
  flex-direction: row;
  width: 26px;
  height: 26px;
`
export const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-top: -10px;
`
export const BackgroundImage = styled.img`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  left: -300px;
  z-index: -1;
  height: 950px;
  width: 950px;
`
export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 135px;
  padding-right: 135px;
  iframe {
    min-width: 100%;
    height: 600px;
  }
  @media (max-width: 1024px) {
    padding-top: 30px;
    padding-left: 85px;
    width: 100%;
  }
`
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SocialMediaHandles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
