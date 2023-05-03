import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLocation } from 'react-router-dom'
import usePost from 'hooks/usePost'
import Button from 'components/Button'
import TextInput from 'components/FormElements/textInput'
import ChangeSuccessModal from 'components/Modal/SuccessErrorModal/changesuccess'
import { Schema } from 'components/Utils/resetPasswordSchema'
import { InputWrapper, ErrorMessage, ErrorWrapper } from 'styles/FormElements'
import { SubmitWrapper } from 'styles/Login'
import { LoginRoute } from 'constants/routes'
import { RedirectLogin } from 'styles/ForgotPassword'

interface IFormInputs {
  password: string
  confirmpassword: string
}

const ResetPasswordForm = () => {
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()

  const location = useLocation()

  useEffect(() => {
    const queryParams = location.search

    console.log(queryParams)
  }, [])

  const { mutateAsync } = usePost()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(Schema) })

  const ResetPassword = async (values: IFormInputs) => {
    setOpenModal(true)

    try {
      const response = await mutateAsync({
        url: 'cand-change-password',
        payload: values,
      })

      console.log('Response', response)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(ResetPassword)}>
        <InputWrapper>
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
        <SubmitWrapper>
          <Button label="reset password" type="submit" />
        </SubmitWrapper>
        {openModal ? <ChangeSuccessModal /> : <></>}
      </form>
      <RedirectLogin>
        <Button label="Return to Login" variant="text" handleClick={() => navigate(LoginRoute.path)} />
      </RedirectLogin>
    </>
  )
}

export default ResetPasswordForm
