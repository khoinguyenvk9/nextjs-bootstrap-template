
import { FC } from 'react'
import { Button, Modal, ModalProps } from 'react-bootstrap'
import { TButtonVariant } from 'types/type'

interface BasedModalProps extends ModalProps {
  title?: string,
  onAccept?: Function,
  titleButtonAccept?: string
  onCancel?: Function
  titleButtonCancel?: string
  variantButtonCancel?: TButtonVariant
  singleButton?: boolean,
  variantBtnAccept?: TButtonVariant
  hideFooter?: boolean
  closeButton?: boolean,
  classTitle?: string,
  iconTitle?: string,
}

const BasedModal: FC<BasedModalProps> = props => {
  return (
    <Modal
      contentClassName="rounded-12px border-0"
      centered
      {...props}>
      <Modal.Header className="border-0" closeButton={props?.closeButton}>
        <Modal.Title className={`${props?.classTitle} d-flex gap-2 align-items-center`}>
          <i className={props?.iconTitle}></i>
          {props?.title || 'Thông báo'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        {props?.children}
      </Modal.Body>
      {
        !props?.hideFooter && (
          <Modal.Footer className="border-0 pt-0">
            <Button
              variant={props?.variantButtonCancel || 'light'}
              onClick={() => { typeof props?.onCancel !== 'undefined' && props?.onCancel() }}
              className={`${props?.singleButton && 'd-none'} rounded-12px py-12px px-5`}>
              {props?.titleButtonCancel || 'Huỷ'}
            </Button>
            <Button
              variant={props?.variantBtnAccept || 'primary'}
              onClick={() => { typeof props?.onAccept !== 'undefined' && props?.onAccept() }}
              className={`rounded-12px px-5 py-12px ${props?.singleButton && 'w-100'}`}>
              {props?.titleButtonAccept || 'OK'}
            </Button>
          </Modal.Footer>
        )
      }
    </Modal>
  )
}

export { BasedModal }

