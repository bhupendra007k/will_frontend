import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ModalWrapper, ListWrapper, ButtonWrapper, Span, CreateAccount } from 'styles/Modal'
import { SignupRoute } from 'constants/routes'

const Modal = () => {
  const navigate = useNavigate()

  return (
    <ModalWrapper>
      <ListWrapper>
        <Span>Home</Span>
        <Span>About</Span>
        <Span>Jobs</Span>
        <Span>Companies</Span>
        <Span>Feedback</Span>
        <ButtonWrapper>
          <CreateAccount onClick={() => navigate(SignupRoute.path)}>Create account</CreateAccount>
        </ButtonWrapper>
      </ListWrapper>
    </ModalWrapper>
  )
}

export default Modal
