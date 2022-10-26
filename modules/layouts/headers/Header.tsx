import { Navbar, Container, Form } from 'react-bootstrap'
const Header = () => {
  return (
    <div>

    <Navbar className="border">
      <Container>
        <Navbar.Brand className="fs-1" href="#home">MY UI</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex w-100 mx-0 mx-md-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-3"
              aria-label="Search"
            />
          </Form>
          <Navbar.Text className="text-nowrap">
            Devoloper: <a href="#login">Khoi Nguyen</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="bg-light py-3 position-sticky top-0">
        Test nhealkshd kasd
      </div>
    </div>
  )
}

export default Header
