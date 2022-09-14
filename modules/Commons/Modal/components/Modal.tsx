import { FC, ReactNode } from 'react'
import { Modal } from 'react-bootstrap'

type ModalProps = {
  show: boolean
  onHide: Function
  children: ReactNode
  hasFooter?: boolean
  title: string
  iconTitle?: ReactNode
}

const ModalDefault:FC<ModalProps> = ({
  show,
  onHide,
  children,
  hasFooter = true,
  title,
  iconTitle
}) => {
  return (
    <Modal show={show} onHide={onHide as any} centered>
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between align-items-center">
          {title}
          {iconTitle && iconTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}

export default ModalDefault
