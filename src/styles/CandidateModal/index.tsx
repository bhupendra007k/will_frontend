import styled from 'styled-components'
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubContainer = styled.div`
  width: 100%;
  max-width: 830px;
  height: 85vh;
  background: #ffffff;
  border-radius: 21px;
  padding: 32px 51px 0px 49px;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  .paragraph {
  }
  .education {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`
export const AccountWrapper = styled.div`
  display: flex;

  justify-content: space-between;
`
export const AccountContainer = styled.div`
  font-family: 'Inter-semibold';
  font-style: normal;
  font-size: 20px;
`
export const CrossContainer = styled.div``
export const CrossImage = styled.img``
export const Name = styled.div`
  font-family: 'Inter-semibold';
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  padding: 20px 0px;
`
export const ProfileContainer = styled.div`
  display: flex;
  gap: 16px;
`
export const AvatarWrapper = styled.div``
export const AvatarImage = styled.img``
export const DataWrapper = styled.div`
  display: flex;
  gap: 11px;
  justify-content: center;
  align-items: center;
`
export const UploadWrapper = styled.div`
  border: 1px solid #1d2e88;
  width: 100%;
  max-width: 137px;
  height: 41px;
  background: #1d2e88;
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`
export const RemoveWrapper = styled.div`
  border: 1.5px solid #1d2e88;
  width: 100%;
  max-width: 137px;
  height: 41px;
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`
export const DataWrapperTwo = styled.div``
export const UploadHeading = styled.div`
  font-family: 'Inter-semibold';
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
`
export const RemoveHeading = styled.div`
  font-family: 'Inter-semibold';
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  color: #1d2e88;
`
export const ProfileParagraph = styled.p`
  font-family: 'Inter-medium';
  font-style: normal;
  font-size: 12px;
  line-height: 15px;
  margin: 0px;
`
export const DataContainer = styled.p`
  display: flex;
  flex-direction: column;
  gap: 11px;
`
export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 27px;
  padding-top: 25px;
`
export const InformationHeading = styled.div`
  font-family: 'Inter-bold';
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  max-width: 17%;
`
export const LineWrapper = styled.div`
  width: 83%;
  height: 0px;
  border: 1px solid rgba(34, 34, 34, 0.11);
`
export const Input = styled.input`
  border: 1px solid green;
`
export const FullName = styled.div`
  border: 1px solid red;
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  position: relative;
  max-height: 56px;
  /* height: 100%; */
  padding-top: 30px;
  /*   color variables */
  $clr-primary: #18ffff;
  $clr-primary-light: #adffff;
  $clr-primary-dark: #091034;
  $clr-gray100: #f9fbff;
  $clr-gray150: #f4f6fb;
  $clr-gray200: #eef1f6;
  $clr-gray300: #e1e5ee;
  $clr-gray400: #767b91;
  $clr-gray500: #4f546c;
  $clr-gray600: #2a324b;
  $clr-gray700: #161d34;
  $clr-bg: #060b23;

  /*   border radius */
  $radius: 0.5rem;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Convergence', sans-serif;
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background-color: $clr-bg;
  }

  .form {
    position: relative;
    width: 20rem;
    height: 3rem;

    &__input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      /* height: 100%; */

      font-family: 'Inter-Regular';
      font-size: 12px;
      color: #070707;
      outline: none;
      padding: 1.25rem;
      background: none;
      border: 1px solid rgba(34, 34, 34, 0.15);
      border-radius: 12px;

      &:hover {
        border-color: $clr-primary-light;
      }

      /* Change border when input focus*/

      &:focus {
        border-color: $clr-primary;
      }
    }

    &__label {
      position: absolute;
      left: 1rem;
      top: 24px;
      padding: 0 0.5rem;
      color: #22222280;
      font-size: 12px;
      cursor: text;
      transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
      background-color: #ffff;
    }
  }

  /* 
1. When the input is in the focus state
reduce the size of the label and move upwards 

2. Keep label state when content is in input field 
*/

  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }
`
export const LabelWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 29px;
`
export const Label = styled.div`
  background-color: #ffffff;
  text-align: center;
  color: rgba(34, 34, 34, 0.5);
  font-family: 'Inter-Medium';
`
export const Input1 = styled.input`
  height: 56px;
  max-width: 350px;
  padding: 0 29px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(34, 34, 34, 0.15);
  font-family: 'Inter-Regular';
  font-size: 14px;
  text-align: justify;
`
export const BasicInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
  row-gap: 24px;
  column-gap: 30px;
`
export const QualificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 44px;
`
export const WebContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
export const WebHeading = styled.div`
  font-family: 'Inter-bold';
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
`
export const WebLine = styled.div`
  height: 0px;
  width: 87%;
  border: 1px solid rgba(34, 34, 34, 0.11);
`

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid rgba(34, 34, 34, 0.11);
  gap: 20px;
`
export const SiteContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`
export const MediaLogo = styled.div``
export const LogoHeading = styled.div`
  font-family: 'Inter-bold';
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
`
export const IconImg = styled.img`
  width: 36px;
  height: 36px;
`
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`
export const LinkWrapper = styled.div`
  font-family: 'Inter-regular';
  font-size: 12px;
  line-height: 15px;
`
export const CrossImg = styled.img`
  height: 15px;
  width: 15px;
`
export const ViewWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  text-align: center;
  padding: 6px;
`
export const ViewHeading = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`
export const ViewLogo = styled.div``
export const ViewImage = styled.img``
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 0px 5px 0px;
`
export const SkillHeading = styled.div`
  font-family: 'Inter-bold';
  font-style: normal;
  font-size: 14px;
`
export const SkillWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
export const SkillLine = styled.div`
  width: 95%;
  height: 0px;
  border: 1px solid rgba(34, 34, 34, 0.11);
`
export const SkillTag = styled.div`
  border: 1px solid red;
  height: 56px;
  background: #ffffff;
  border: 1px solid rgba(34, 34, 34, 0.15);
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;

  .css-1s2u09g-control {
    border: none;
  }
  .css-1rhbuit-multiValue {
    border-radius: 20px;
  }
  .css-12jo7m5 {
    font-family: 'Inter-medium';
    font-style: normal;
    color: #1d2e88;
  }
  .css-1rhbuit-multiValue {
    background: #fefefe;
    border: 0.5px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
  }
`
export const SkillLabel = styled.label`
  position: absolute;
  top: -9px;
  left: 22px;
  background: white;
  font-size: 12px;
  font-family: 'Inter-medium';
  color: rgba(34, 34, 34, 0.5);
`
export const TagWrapper = styled.div`
  padding: 20px 0px;
`
export const TagHeading = styled.div``
export const ChangesWrapper = styled.div`
  background: #ffffff;
  display: flex;
  position: sticky;
  bottom: 0;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 0px;
`
export const CancelHeading = styled.div`
  font-family: 'Inter-bold';
  font-style: normal;
  font-size: 16px;
  color: #1d2e88;
  cursor: pointer;
`
export const CancelWrapper = styled.div``
export const SaveWrapper = styled.div`
  background: #1d2e88;
  border-radius: 8px;
  width: 100%;
  max-width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SaveHeading = styled.div`
  font-family: 'Inter-bold';
  font-style: normal;
  font-size: 16px;
  color: #ffffff;
`
export const TagsItem = styled.div`
  background: #fefefe;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  display: inline-block;
  width: 100%;
  max-width: 100px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

export const SpanTag = styled.div`
  font-size: 10px;
  font-family: 'Inter-medium';
  font-style: normal;
  font-size: 12px;
  color: #1d2e88;
`

export const SpanClose = styled.img`
  width: 10px;
  height: 10px;
`
export const InputSkills = styled.input`
  border-radius: 20px;
  max-width: 102px;
  text-align: center;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
`
