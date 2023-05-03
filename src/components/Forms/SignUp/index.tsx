import { useContext, useEffect, useState } from 'react'
import { SubmitWrapper } from 'styles/Login'
import { useForm } from 'react-hook-form'
import { LoaderContext } from 'context/loader'
import usePost from 'hooks/usePost'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema } from 'components/Utils/signupSchema'
import TextInput from 'components/FormElements/textInput'
import Button from 'components/Button'

import { EMPSIGNUP } from 'constants/apiRoutes'
import { LoginRoute, SignupRoute } from 'constants/routes'
import { InputWrapper, ErrorMessage, AccountExists, ErrorWrapper } from 'styles/FormElements'
import PopUp from 'components/Popups'
import SuccessTic from 'assets/svg/doneticgreen'
import Erroricon from 'assets/svg/ErrorPopupicon'
interface IFormInputs {
  email: string
  password: string
  name: string
  confirmpassword: string
}
interface IFormInputs {
  email: string
  password: string
  name: string
  type: string
}

const SignupForm = () => {
  const { setLoader } = useContext(LoaderContext)

  const [errorModal, setErrorModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(Schema) })
  const navigate = useNavigate()
  const { mutateAsync, isLoading } = usePost()

  useEffect(() => {
    if (isLoading) {
      setLoader(true)
    }
  }, [isLoading])

  const onSubmit = async (values: any) => {
    try {
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
      }
      const response = await mutateAsync({
        url: EMPSIGNUP,
        payload,
      })

      if (response.success == true) {
        setSuccessModal(true)
        setTimeout(() => {
          {
            setSuccessModal(false)
          }

          navigate(LoginRoute.path)
        }, 2000)
      } else if (response.error == true) {
        alert(response.message)
      }
    } catch (err) {
      setErrorModal(true)
      setTimeout(() => {
        setErrorModal(false)
        navigate(SignupRoute.path)
      }, 2500)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <div>
          <TextInput control={control} name="name" type="text" placeholder="Name" />
          <ErrorWrapper>
            <ErrorMessage>{errors.name && <div>{errors.name.message}</div>}</ErrorMessage>
          </ErrorWrapper>
        </div>
        <div>
          <TextInput control={control} name="email" type="text" placeholder="Email address" />
          <ErrorWrapper>
            <ErrorMessage>{errors.email && <div>{errors.email.message}</div>}</ErrorMessage>
          </ErrorWrapper>
        </div>
        <div>
          <TextInput control={control} placeholder="Password" name="password" type="password" />
          <ErrorWrapper>
            <ErrorMessage>{errors.password && <div>{errors.password.message}</div>}</ErrorMessage>
          </ErrorWrapper>
        </div>
        <div>
          <TextInput control={control} placeholder="Confirm password" name="confirmpassword" type="password" />
          <ErrorWrapper>
            <ErrorMessage>{errors.confirmpassword && <div>{errors.confirmpassword.message}</div>}</ErrorMessage>
          </ErrorWrapper>
        </div>
      </InputWrapper>
      <div>
        <SubmitWrapper>
          <Button type="submit" label="Signup" variant="contained" />
        </SubmitWrapper>
      </div>
      <AccountExists>
        <div>Already have an Account?</div>
        <Button handleClick={() => navigate(LoginRoute.path)} label="Login" variant="text" />
      </AccountExists>
      {successModal && (
        <PopUp
          value={() => setSuccessModal(false)}
          icon={<SuccessTic />}
          variant="success"
          heading="Well done!"
          subHeading="Sign up Successful, Please go to login Page to login"
        />
      )}

      {errorModal && (
        <PopUp
          value={() => setErrorModal(false)}
          icon={<Erroricon />}
          variant="error"
          heading="Error!"
          subHeading="Something went wrong, Please try again"
        />
      )}
    </form>
  )
}

export default SignupForm
