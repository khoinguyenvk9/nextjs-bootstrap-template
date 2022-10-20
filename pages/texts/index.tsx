import { Container } from 'react-bootstrap'

const TextPage = () => {
  return (
    <Container>
      <h1 className="text-center">Text example</h1>
      <div className="display-1 fw-bold">Display 1</div>
      <div className="display-2 fw-bold">Display 2</div>
      <div className="display-3 fw-bold">Display 3</div>
      <div className="display-4 fw-bold">Display 4</div>
      <div className="display-5 fw-bold">Display 5</div>
      <div className="display-6 fw-bold">Display 6</div>

      <div className="container">
        <h1 className="d-flex align-items-center"></h1>
      </div>
    </Container>
  )
}

export default TextPage
