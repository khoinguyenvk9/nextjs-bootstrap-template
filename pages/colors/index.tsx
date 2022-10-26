import { NextPage } from 'next'
import {Container} from 'react-bootstrap'

const Colors: NextPage = () => {
  const arrayNumber = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const bgs = ["bg-primary", "bg-success", "bg-warning", "bg-danger", "bg-info", "bg-light", "bg-dark", "bg-body", "bg-white", "bg-transparent"]

  return (
    <Container fluid>
      <h3>Background color</h3>
      <div className="d-flex flex-row flex-wrap">
        {
          bgs.map((bg: string, index: number) => (
            <div key={index} className={`p-5 ${bg}`}>
              {bg}
            </div>
          ))
        }
      </div>

      <h3>Lighten</h3>
      <div className="d-flex flex-row flex-wrap">
        {
          arrayNumber.map((item) => (
            <div key={item} className={`px-5 py-2 bg-primary-lighten-${item}`}>
              primary {item}%
            </div>
          ))
        }
      </div>
      <h3>Darken</h3>
      <div className="d-flex flex-row flex-wrap">
        {
          arrayNumber.map((item) => (
            <div key={item} className={`px-5 py-2 bg-primary-darken-${item}`}>
              primary {item}%
            </div>
          ))
        }
      </div>
      <h3>Tint</h3>
      <div className="d-flex flex-row flex-wrap">
        {
          arrayNumber.map((item) => (
            <div key={item} className={`px-5 py-2 bg-primary-tint-${item}`}>
              primary {item}%
            </div>
          ))
        }
      </div>
      <h3>Shade</h3>
      <div className="d-flex flex-row flex-wrap">
        {
          arrayNumber.map((item) => (
            <div key={item} className={`px-5 py-2 bg-primary-shade-${item}`}>
              primary {item}%
            </div>
          ))
        }
      </div>
      <div className="d-flex flex-row flex-wrap">
        {
          arrayNumber.map((item) => (
            <div key={item} className={`px-5 py-2 bg-danger-lighten-${item}`}>
              danger {item}%
            </div>
          ))
        }
      </div>
      <div className="d-flex flex-row flex-wrap">
        {
          arrayNumber.map((item) => (
            <div key={item} className={`px-5 py-2 bg-success-lighten-${item}`}>
              danger {item}%
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default Colors
