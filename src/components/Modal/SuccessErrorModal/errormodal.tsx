import { useState } from 'react'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import ErrorImage from 'assets/images/error.png'
import { SuccessfullySent, ModalWrapper } from 'styles/Success and Error Modal/successmodal'

const customStyles = {
  content: {
    border: 'none',
    padding: 'none',
    background: 'none',
  },
}

interface IData {
  data?: string
}

const ErrorModal = (data: IData) => {
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
            <img src={ErrorImage} />
            <div className="ErrorText">Error!</div>
            <div>Thanku for your request.</div>
            <div> We are unable to continue the process. </div>
            <div> Please try again to complete the request. </div>
            <button
              className="TryButton"
              onClick={() => {
                toggleModal()
                if (data?.data) navigate(data.data)
              }}
            >
              Try Again
            </button>
          </div>
        </SuccessfullySent>
      </Modal>
    </ModalWrapper>
  )
}

export default ErrorModal
