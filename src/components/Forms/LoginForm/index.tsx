import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usePost from 'hooks/usePost'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema } from 'components/Utils/loginSchema'
import TextInput from 'components/FormElements/textInput'
import Button from 'components/Button'
import { login } from 'components/Utils'
import { AdminDashboardRoute, ForgotPasswordRoute } from 'constants/routes'
import { EMPLOGIN } from 'constants/apiRoutes'
import { LoaderContext } from 'context/loader'
import { SubmitWrapper } from 'styles/Login'
import {
  InputWrapper,
  ErrorMessage,
  LogintbnWrapper,
  FieldWrapper,
  ErrorWrapper,
  ForgotPasswordWrapper,
  ForgotPassword,
} from 'styles/FormElements'
import 'antd/dist/antd.min.css'
import PopUp from 'components/Popups'
import Erroricon from 'assets/svg/ErrorPopupicon'
interface IFormInputs {
  email: string
  password: string
  access_token: string
}

const LoginForm = () => {
  const navigate = useNavigate()
  const [errorModal, setErrorModal] = useState(false)
  const { setLoader } = useContext(LoaderContext)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(Schema) })

  const { mutateAsync, isLoading } = usePost()

  useEffect(() => {
    if (isLoading) setLoader(true)
    else setLoader(false)
  })

  const loginFormData = async (values: IFormInputs) => {
    try {
      const response = await mutateAsync({
        url: EMPLOGIN,
        payload: values,
      })

      if (response.access_token) {
        login(response.access_token)
      }

      if (response.success) {
        navigate(AdminDashboardRoute.path)
      }
    } catch (error: any) {
      setErrorModal(true)
      setTimeout(() => {
        setErrorModal(false)
      }, 2500)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(loginFormData)}>
        <InputWrapper>
          <FieldWrapper>
            <TextInput className="" control={control} name="email" type="text" placeholder="Email" />
            <ErrorWrapper>
              <ErrorMessage>{errors.email && <div>{errors.email.message}</div>}</ErrorMessage>
            </ErrorWrapper>
          </FieldWrapper>
          <FieldWrapper>
            <TextInput control={control} placeholder="Password" name="password" type="password" />
            <ErrorWrapper>
              <ErrorMessage>{errors.password && <div>{errors.password.message}</div>}</ErrorMessage>
            </ErrorWrapper>
          </FieldWrapper>
        </InputWrapper>
        <ForgotPasswordWrapper>
          <ForgotPassword onClick={() => navigate(ForgotPasswordRoute.path)}>Forgot Password?</ForgotPassword>
        </ForgotPasswordWrapper>

        <SubmitWrapper>
          <LogintbnWrapper>
            <Button type="submit" label="Login" variant="contained" />
          </LogintbnWrapper>
        </SubmitWrapper>
      </form>
      {errorModal && (
        <PopUp
          value={() => setErrorModal(false)}
          icon={<Erroricon />}
          variant="error"
          heading="Error!"
          subHeading="Invalid Id or Password, please check and try again"
        />
      )}
    </>
  )
}

export default LoginForm
