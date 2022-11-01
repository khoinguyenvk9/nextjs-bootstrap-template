import { Container, Modal, Button } from 'react-bootstrap'
import { useState } from 'react'
const ModalPage = () => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <Container>
      <h1>Modal</h1>
      <div>This is Modal example</div>
      <Button>Show modal</Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>This is modal body</h1>
        </Modal.Body>
        <Modal.Footer>
          <div>this is modal Footer</div>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default ModalPage
