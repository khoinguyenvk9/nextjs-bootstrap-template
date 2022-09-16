import { useEffect, useState } from 'react'
import { Offcanvas, Form } from 'react-bootstrap'
import { listDocs } from 'utils/constants'
import Link from 'next/link'

const MenuOffCanvas = () => {
  const [show, setShow] = useState<boolean>(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <div>
      <div className="menu-offcanvas" onClick={() => handleShow()}>
        <i className="bi bi-list" />
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Documents</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-3"
                aria-label="Search"
              />
            </Form>
          </div>
          <div className="d-flex flex-row flex-wrap py-4 gap-2">
            { listDocs.map((doc, index) => (
              <Link href={doc?.link} key={index}>
                <a className="p-3 border border-s">
                  {doc?.title}
                </a>
              </Link>
            )) }
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default MenuOffCanvas
    
