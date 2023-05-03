import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema } from 'components/Utils/forgotSchema'
import usePost from 'hooks/usePost'
import Button from 'components/Button'
import TextInput from 'components/FormElements/textInput'
import SuccessModal from 'components/Modal/SuccessErrorModal/successmodal'
import { InputWrapper, ErrorMessage, ErrorWrapper } from 'styles/FormElements'
import { SubmitWrapper, Form, RedirectLogin } from 'styles/ForgotPassword'
import { FORGOTPASSWORD } from 'constants/apiRoutes'
import { LoginRoute } from 'constants/routes'

interface IFormInputs {
  email: string
}

const ForgotPasswordForm = () => {
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(Schema) })
  const { mutateAsync } = usePost()

  const forgotPassword = async (values: IFormInputs) => {
    try {
      const response = await mutateAsync({
        url: FORGOTPASSWORD,
        payload: values,
      })

      if (response.success) {
        setOpenModal(true)
      }
    } catch (e) {
      alert(e)
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(forgotPassword)}>
        <InputWrapper>
          <div>
            <TextInput control={control} name="email" type="text" placeholder="Email Address"></TextInput>
            <ErrorWrapper>
              <ErrorMessage>{errors.email && <div>{errors.email.message}</div>}</ErrorMessage>
            </ErrorWrapper>
          </div>
        </InputWrapper>
        <SubmitWrapper>
          <Button label="Send" type="submit" variant="contained" />
        </SubmitWrapper>
        <RedirectLogin>
          <Button label="Return to Login" variant="text" handleClick={() => navigate(LoginRoute.path)} />
        </RedirectLogin>
        {openModal ? <SuccessModal /> : <></>}
      </Form>
    </>
  )
}

export default ForgotPasswordForm
