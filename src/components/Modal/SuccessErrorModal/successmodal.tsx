import React, { useState } from 'react'
import Modal from 'react-modal'
import { SuccessfullySent, ModalWrapper } from 'styles/Success and Error Modal/successmodal'
import SuccessfullImg from 'assets/images/successfully.png'

const customStyles = {
  content: {
    border: 'none',
    padding: 'none',
  },
}
const SuccessModal = () => {
  const [isOpen, setisOpen] = useState(true)

  function toggleModal() {
    setisOpen(!isOpen)
  }

  return (
    <ModalWrapper>
      <Modal style={customStyles} isOpen={isOpen} onRequestClose={toggleModal} className="modal-container">
        <SuccessfullySent>
          <div>
            <img src={SuccessfullImg} />
            <div className="SuccessText">Successfully Sent</div>
            <div>Thank you for your request. </div>
            <div>Shortly You will find a Reset Password Link in your email.</div>
            <div>
              Not recieved yet
              <span className="ResendText">
                <button>Resend</button>
              </span>
            </div>
            <button className="ContinueButton" onClick={toggleModal}>
              Continue
            </button>
          </div>
        </SuccessfullySent>
      </Modal>
    </ModalWrapper>
  )
}

export default SuccessModal
