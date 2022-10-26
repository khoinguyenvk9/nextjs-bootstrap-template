import React from 'react'
const Rendertest = () => {
  const [show, setShow] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    console.log('chung ta cu HIEN HAIB')
    return () => {
      setLoading(false)
    }
  }, [])
  return (
    <div>
      {show && <h1>hehehe</h1>}
      <button onClick={() => setShow(prev => !prev)}>show</button>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Chung ta cua hien tai</h1>
        <div className="d-flex d-inline-block ps-2">
          {loading && <span className="text-center"></span>}
        </div>
      </div>
    </div>
  )
}
export default Rendertest
