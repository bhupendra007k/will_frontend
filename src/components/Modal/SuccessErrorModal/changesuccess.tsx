import { useState } from 'react'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import { SuccessfullySent, ModalWrapper } from 'styles/Success and Error Modal/successmodal'
import SuccessfullImg from 'assets/images/successfully.png'
import { LoginRoute } from 'constants/routes'

const customStyles = {
  content: {
    border: 'none',
    padding: 'none',
    background: 'none',
  },
}

const ChangeSuccessModal = () => {
  const [isOpen, setisOpen] = useState(true)
  const navigate = useNavigate()

  function toggleModal() {
    setisOpen(!isOpen)
  }

  return (
    <ModalWrapper>
      <Modal style={customStyles} isOpen={isOpen} onRequestClose={toggleModal}>
        <SuccessfullySent>
          <div>
            <img src={SuccessfullImg} />
            <div className="SuccessText">Change Sucessfully</div>
            <div>Your password is changed successfully.</div>
            <div> Use your new password to login. </div>
            <button
              className="ContinueButton"
              onClick={() => {
                toggleModal()

                navigate(LoginRoute.path)
              }}
            >
              Return to Login Page
            </button>
          </div>
        </SuccessfullySent>
      </Modal>
    </ModalWrapper>
  )
}

export default ChangeSuccessModal
