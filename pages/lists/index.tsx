import { Container } from 'react-bootstrap'
import { useState } from 'react'
const ListPage = () => {
  const [data, setData] = useState()
  const handleGetApi = () => {
    try {
      const a = ''
      setData(a)
    } catch (error: any) {
      console.error(error)
    }
  }
  return (
    <Container>
      <h1>List</h1>
      <div>This is some example list</div>
      <div>This is my ticket {data}</div>
    </Container>
  )
}

export default ListPage
