import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 644px;
  width: 100%;
`
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`
export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 10px 20px;
`
export const Button = styled.button`
  background: #1d2e88;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 10px;
  cursor: pointer;
  font-family: 'Inter-Bold';
`
export const RecruiterWrapper = styled.div`
  display: flex;
  gap: 10px;
`
export const ImageIcon = styled.img`
  width: 30px;
`
export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 15px;
`
export const FeedbackContainer = styled.div`
  display: flex;
  gap: 20px;
`
export const DataText = styled.h4`
  font-size: 14px;
  font-family: 'Inter-SemiBold';
  margin-bottom: 0px;
`
export const Image = styled.img`
  width: 40px;
  height: 40px;
`

export const Text = styled.p`
  font-size: 14px;
  font-family: 'Inter-Medium';
  margin-bottom: 0px;
`
export const DataWrapper = styled.div`
  display: flex;
  gap: 20px;
`
export const Date = styled.h4`
  font-size: 10px;
  font-family: 'Inter-Medium';
  color: #b0b0b0;
  padding-top: 3px;
`
export const Time = styled.h4`
  font-size: 10px;
  font-family: 'Inter-Medium';
  color: #b0b0b0;
  padding-top: 3px;
`
export const Count = styled.h4`
  font-size: 12px;
  font-family: 'Inter-Bold';
  color: #b0b0b0;
`
export const MessageWrapper = styled.div`
  display: flex;
  padding: 5px 10px;
`
export const Wrapper = styled.div`
  width: 100%;
  padding: 5px;
`
export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  max-height: 45px;
  border-radius: 8px;
`
export const Input = styled.input`
  border: none;
  outline: none;
  margin: 2px;
`
export const SendButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  border-left: 1px solid #00000033;
  padding: 0 10px;
`
