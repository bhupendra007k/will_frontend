import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
`
export const SideBar = styled.div`
  max-width: 259px;
  width: 100%;
  background-color: #ffebb1;
`
export const MainSection = styled.div`
  flex: 1;
  padding: 0px 31px;
  background-color: #fafafa;
`
export const Container = styled.div`
  display: flex;
  padding-bottom: 15px;
`
export const HeadingWrapper = styled.div`
  font-size: 20px;
  font-family: 'Inter-SemiBold';
`
export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px #3e49540a;
  border-radius: 12px;
`
export const JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dfdfdf;
  padding: 20px 30px;
  gap: 10px;
  .input {
    border: 1px solid rgba(34, 34, 34, 0.15);
    width: 100%;
    max-width: 100%;
  }
`
export const Input = styled.input`
  border-radius: 12px;
  border: 1px solid #dfdfdf;
  padding: 15px;
  outline: none;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dfdfdf;
  padding: 20px 30px;
  gap: 10px;
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #dfdfdf;
  outline: none;
  height: 294px;
  .description {
    border: none;
    max-width: 100%;
  }
`
export const StyleWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px 20px;
  border-bottom: 1px solid #dfdfdf;
`
export const StylingContainer = styled.div`
  display: flex;
  gap: 30px;
  border-right: 1px solid #22222226;
`
export const AlignmentContainer = styled.div`
  display: flex;
  padding-left: 20px;
  gap: 10px;
`
export const ButlletsWrapper = styled.div`
  display: flex;
  gap: 5px;
`
export const HeadingStyleWrapper = styled.div`
  display: flex;
  gap: 5px;
`
export const TextWrapper = styled.input`
  height: 264px;
  border: none;
  outline: none;
`
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  border-bottom: 1px solid #dfdfdf;
`
export const JobForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  gap: 20px;
`
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
    padding-top: 7px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const FieldHeading = styled.h3`
  font-size: 20px;
  font-family: 'Inter-SemiBold';
`
export const InputField = styled.input`
  max-width: 510px;
  width: 100%;
  font-family: 'Inter-SemiBold';
  outline: none;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  padding: 18px 15px;
`
export const ExperienceWrapper = styled.div`
  padding: 20px 0px;
`
export const FieldText = styled.div`
  display: flex;
  gap: 20px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const InputArea = styled.input`
  outline: none;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  font-family: 'Inter-SemiBold';
  padding: 15px;
`
export const TextArea = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0px;
  font-family: 'Inter-Medium';
`
export const SalaryWrapper = styled.div`
  padding: 0px 0px 20px;
`
export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px 20px;
`
export const Button = styled.button`
  font-size: 16px;
  font-family: 'Inter-Bold';
  color: #1d2e88;
  border: none;
  background: #ffffff;
  cursor: pointer;
`
export const SaveButton = styled.button`
  background: #1d2e88;
  border-radius: 8px;
  color: #ffffff;
  outline: none;
  border: none;
  width: 150px;
  padding: 15px;
  font-size: 16px;
  font-family: 'Inter-Bold';
`
export const FieldInput = styled.input`
  max-width: 500px;
  width: 100%;
  outline: none;
  border: none;
  padding: 15px;
`

export const InputWrappers = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  border-radius: 12px;
`
export const DropMenu = styled.div`
  outline: none;
  border-left: none;
`
export const InputText = styled.input`
  outline: none;
  border: none;
  padding: 15px;
  color: #000000;
  font-size: 16px;
  font-family: 'Inter-Medium';
  max-width: 100px;
  width: 100%;
  text-align: center;
`
export const JobsContentSub2 = styled.div`
  display: flex;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .ant-select {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum', 'tnum';
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 100%;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    padding: 10px 10px;
    border-radius: 12px;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector :hover {
    outline: none;
    border: none;
  }
  .ant-select-dropdown {
    width: 400px;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item {
    color: rgba(34, 34, 34, 0.5);
    font-family: 'Inter-SemiBold';
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 60px;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item {
    padding: 4px;
  }
  .ant-select-arrow {
    right: 25px;
  }
  .anticon svg {
    color: rgba(34, 34, 34, 0.5);
    font-size: 14px;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector :hover {
    padding-top: 7px;
  }
`
export const SelectWrapper = styled.div`
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    width: 124px;
    padding: 10px 10px 10px 30px;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item {
    color: #000000;
    font-family: 'Inter-SemiBold';
  }
  .anticon svg {
    color: #000000;
  }
`
export const JobsContentSub1 = styled.div`
  .ant-select {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum', 'tnum';
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 100%;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 55px;
    position: relative;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding: 12px;
  }
  .ant-select-single.ant-select-open .ant-select-selection-item {
    color: #bfbfbf;
  }
`
export const TextInput = styled.input`
  max-width: 100%;
  width: 100%;
  border-radius: 15px;
  font-family: 'Inter-Regular';
  font-size: 16px;
  padding: 21px 0px 21px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  background: transparent;
`
export const SelectInput = styled.select`
  height: 60px;
  width: 510px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
`
export const Dropdown = styled.img`
  width: 14px;
  height: 16px;
`
export const RangeWrapper = styled.div`
  width: 100%;
  max-width: 1087px;
  display: flex;
  justify-content: space-between;
`
