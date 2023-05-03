import React, { useState } from 'react'
import Modal from 'react-modal'
import { SuccessfullySent, ModalWrapper } from 'styles/Success and Error Modal/successmodal'
import Witsicon from 'assets/images/witsicon.jpg'
import ComingSoonCloseButton from 'assets/images/comingsoonclosebutton.png'

const customStyles = {
  content: {
    border: 'none',
    padding: 'none',
    background: 'none',
  },
}

const ComingSoonModal = () => {
  const [isOpen, setisOpen] = useState(true)

  function toggleModal() {
    setisOpen(!isOpen)
  }

  return (
    <ModalWrapper>
      <Modal style={customStyles} isOpen={isOpen} onRequestClose={toggleModal}>
        <SuccessfullySent>
          <div>
            <div className="closebutton">
              <button>
                <img
                  onClick={() => {
                    {
                      toggleModal()
                    }
                  }}
                  src={ComingSoonCloseButton}
                />
              </button>
            </div>
            <img className="witsicon" src={Witsicon} />
            <div className="SuccessText">Coming Soon</div>
            <div>We are going to launch our Web-Application Very Soon.</div>
            <br />
            <div> Stay with us. </div>
          </div>
        </SuccessfullySent>
      </Modal>
    </ModalWrapper>
  )
}

export default ComingSoonModal
