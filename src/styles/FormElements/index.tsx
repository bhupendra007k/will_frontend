import styled from 'styled-components'
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 7px;

  svg {
    position: absolute;
    right: 13px;
    top: 30px;
    cursor: pointer;
  }
`
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 449px;
`
export const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  font-family: 'Inter-Regular';
  font-size: 16px;
  padding: 21px 0px 21px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  background: transparent;
`
export const PasswordWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  border: 1px solid #27272766;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`
export const EyebtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 7px;
`
export const Form = styled.form`
  padding-top: 45px;
`

export const ErrorWrapper = styled.div`
  height: 28px;
  padding-top: 4px;
  display: flex;
  justify-content: center;
  line-height: 1;
`
export const ErrorMessage = styled.div`
  text-align: left;
  max-width: 450px;
  width: 100%;
  font-family: 'Inter-Regular';
  font-weight: 500;
  font-size: 12px;
  padding-top: 3px;
  padding-left: 15px;
  line-height: 13jkpx;
  /* letter-spacing: -0.02em; */
  color: #ff5b51;
  margin: 0px;
`
export const InputFile = styled.input`
  max-width: 445px;
  width: 100%;
  border-radius: 15px;
  font-family: 'Inter-Regular';
  font-size: 16px;
  padding: 21px 0px 21px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  background: transparent;
`
export const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: darkblue;
  cursor: pointer;
  font-family: 'Inter-Regular';
`
export const ForgotPassword = styled.div`
  display: flex;
  justify-content: flex-end;
  color: darkblue;
  cursor: pointer;
  font-family: 'Inter-Regular';

  :hover {
    opacity: 0.8;
  }
`

export const LogintbnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const AccountExists = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 5px;
`
export const LoginLink = styled.div`
  color: darkblue;
  text-decoration: underline;
  cursor: pointer;
  font-family: 'Inter-Regular';
  :hover {
    color: #00008a9d;
  }
`
