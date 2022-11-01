import { Button } from 'react-bootstrap'
import { variantButton } from 'utils/constants'

const ButtonPage = () => {
  return (
    <div>
      <h1 className="text-center">Button</h1>
      {variantButton.map((item, index) => (
        <Button className="m-2 p-3" key={index} variant={item}>
          {item}
        </Button>
      ))}
      <div>
        <h1>Button custom</h1>
        <Button variant="success" className="based button">
          My button
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage
