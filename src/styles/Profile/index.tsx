import styled from 'styled-components'
export const Section = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fafafa;
`
export const Container = styled.div`
  background: #fafafa;
  z-index: 1;
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const Form = styled.form`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 0px #3e49540a;
  border-radius: 20px;
  opacity: 1;
  padding: 27px 21px 67px 23px;
  width: 75%;
`
export const EditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const EditProfile = styled.div`
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  font-size: 16px;
  font-family: 'Inter-SemiBold';
`
export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  .available {
    font-size: 14px;
    font-family: 'Inter-Medium';
  }
`
export const SwitchWrapper = styled.div`
  .ant-switch-checked {
    background-color: #c5cdfa;
  }
  .ant-switch-handle::before {
    background: #1d2e88;
  }
`
export const CancelButton = styled.div`
  font-size: 12px;
  background: #efefef 0% 0% no-repeat padding-box;
  border-radius: 29px;
  width: 100%;
  max-width: 96px;
  min-height: 43px;
  border: none;
  justify-content: center;
  font-size: 12px;
  font-family: 'Inter-SemiBold';
  align-items: center;
  cursor: pointer;
  display: flex;
`
export const SaveButton = styled.button`
  font-size: 12px;
  background: #1d2e88 0% 0% no-repeat padding-box;
  border-radius: 29px;
  font-size: 12px;
  font-family: 'Inter-SemiBold';
  opacity: 1;
  width: 100%;
  max-width: 143px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  text-align: center;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 260px;
`
export const FormWrapper = styled.div``
export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'Inter-SemiBold';
  padding-top: 10px;
  padding-bottom: 20px;
`
export const Line = styled.div`
  border-bottom: 1px solid #e7e7e7;
  width: 85%;
  opacity: 1;
`
export const Information = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  row-gap: 40px;
  column-gap: 35px;
  padding: 22px 0px 53px 0px;
  font-size: 12px;
  font-family: 'Inter-Medium';
`
export const Label = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  min-width: 180px;
  width: 100%;
`
export const LabelInner = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
  .input {
    border: none;
    outline: none;
    padding: 2px;
  }
  .password {
    border: 1px solid black;
    padding: 0px;
  }
  .password_icon {
    top: 4px;
    left: 204px;
  }
`
export const Input = styled.input`
  border: none;
  text-decoration: none;
  outline: none;
  max-width: 148px;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  min-width: 250px;
  width: 100%;
  padding: 10px;
  .password {
    position: absolute;
  }
`
export const Inputcred = styled.input`
  border: none;
  text-decoration: none;
  outline: none;
  min-width: 256px;
  width: 100%;
  padding: 10px;
  .password {
    position: absolute;
  }
  .input {
    border: none;
    outline: none;
    padding: 10px;
  }
`
export const Inform = styled.div``
export const Show = styled.div`
  color: #1d2e88;
  font-weight: 600;
  text-align: left;
  position: relative;
  right: 41px;
  cursor: pointer;
`
export const FormWrapperTwo = styled.div`
  padding-right: 36px;
`
export const AboutContainer = styled.div``
export const Heading = styled.h3`
  font-size: 12px;
  font-family: 'Inter-Medium';
  padding: 10px 0px 10px 0px;
  margin: 0px;
`
export const Paragraph = styled.p`
  font-size: 14px;
  font-family: 'Inter-Regular';
  opacity: 65%;
  background: #fbfbfb 0% 0% no-repeat padding-box;
  border: 1px solid #c2c2c2;
  border-radius: 20px;
  padding: 17px 17px 15px 19px;
  margin: 0px;
`
export const Skills = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0px;
`
export const Para = styled.p`
  text-align: left;
  font-size: 14px;
  font-family: 'Inter-Medium';
  color: #1d2e88;
  opacity: 1;
  margin: 0px;
`
export const Head = styled.h2`
  font-size: 14px;
  font-family: 'Inter-SemiBold';
  margin: 0px;
`
export const LineTwo = styled.div`
  border-bottom: 1px solid #e7e7e7;
  width: 83%;
  height: 14px;
`
export const Range = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
`
export const Span = styled.div`
  border: 1px solid #1d2e88;
  width: 46px;
  height: 46px;
  color: #1d2e88;
  border-radius: 45px;
  text-align: center;
  font-weight: 600;
  opacity: 1;
  div {
    padding: 10px 0px 10px 0px;
  }
`
export const SliderValue = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  grid-column-gap: 100px;
  flex-wrap: wrap;
  .ant-slider-rail {
    background: #efefef;
    border-radius: 5px;
    height: 8px;
  }
  .ant-slider-handle {
    background: #1d2e88;
    height: 18px;
    width: 18px;
    border: none;
  }
  .ant-slider-track {
    background-color: #1d2e88;
    height: 8px;
  }

  .ant-tooltip {
    border: 1px solid black;
    width: 10px;
    height: 0px;
    border-radius: 45px;
  }
`
export const InputTwo = styled.div``

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`
export const SubPart = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  background-color: #f9c52b;
`
export const Rating = styled.div`
  width: 40px;
  height: 39px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 0px #3e49540a;
  border-radius: 20px;
  opacity: 1;
  border: 1px solid green;
`
export const SliderHeading = styled.div`
  font-size: 12px;
  font-family: 'Inter-Medium';
  position: relative;
  left: 52px;
  top: 10px;
`
export const Sliderwrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`
export const RangeTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid black;
`
export const ImgMobile = styled.img`
  width: 15px;
  height: 16px;
`
export const MobileWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  border-top: none;
  border-right: none;
  border-left: none;
  .input {
    outline: none;
    border: none;
    margin: 0px;
    padding: 7px;
  }
  .inputwrapper {
    width: 100%;
    min-width: 260px;
  }
`
export const WhatsappWrapper = styled.div`
  display: flex;
`
export const ImgWhatsapp = styled.img`
  width: 16px;
  height: 16px;
`
export const EmailWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  border-top: none;
  border-right: none;
  border-left: none;
  .input {
    outline: none;
    border: none;
    margin: 0px;
    padding: 7px;
  }
  .inputwrapper {
    min-width: 266px;
  }
`
export const ImgEmailOne = styled.img`
  width: 17px;
  height: 10px;
`
export const DropDown = styled.div`
  outline: none;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  border-top: none;
  border-right: none;
  border-left: none;
  .input {
    outline: none;
    border: none;
    margin: 0px;
    padding: 7px;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    margin-top: 6px;
  }
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: none;
    border-right-width: 1px;
  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: none;
    box-shadow: none;
    border-right-width: 1px;
    outline: 0;
  }
`
export const ImgDrop = styled.img`
  width: 12px;
  height: 10px;
`
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TopImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`
export const DataWrapper = styled.div`
  .input {
    outline: none;
    border: none;
    margin: 0px;
    padding: 3px;
    border-radius: 0px;
    border-bottom: 1px solid #e7e7e7;
    width: 100%;
    max-width: 245px;
  }
  .inputwrapper {
    min-width: 266px;
  }
`
export const AddressWrapper = styled.div`
  .input {
    outline: none;
    border: none;
    margin: 0px;
    padding: 7px;
    border-radius: 0px;
    border-bottom: 1px solid #e7e7e7;
  }
  .inputwrapper {
    width: 100%;
    min-width: 266px;
  }
`
export const ProgressChartWrapper = styled.div`
  .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
    stroke: #1d2e88;
  }

  .progress {
    stroke: #1d2e88;
  }
`
export const ProgressChartTwo = styled.div`
  .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
    stroke: #22ab92;
  }
`
