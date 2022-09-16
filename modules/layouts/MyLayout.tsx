import { FC, ReactNode } from 'react'
import Meta from './Meta'
import { Header } from './headers'

const MyLayout:FC<{children: ReactNode}> = ({ children }) => {
  return (
    <>
      <Meta></Meta>
       <div className="main-container">
        <Header />
        <main id="content" role="main">
          {children}
        </main>
      </div>

    </>
  )
}

export default MyLayout
