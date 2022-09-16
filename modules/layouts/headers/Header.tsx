import { Navbar, Container } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar className="border">
      <Container>
        <Navbar.Brand className="fs-1" href="#home">MY UI</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Devoloper: <a href="#login">Khoi Nguyen</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
