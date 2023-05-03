import { ReactChild } from 'react'
import Modal from 'react-modal'

interface IModalProps {
  isOpen: boolean
  children: ReactChild
  hideModal?: () => void
}

const ModalComponent: React.FC<IModalProps> = ({ isOpen, children, hideModal }: IModalProps) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={hideModal}
    className="modal"
    ariaHideApp={false}
    shouldCloseOnOverlayClick={true}
  >
    {children}
  </Modal>
)

export default ModalComponent
