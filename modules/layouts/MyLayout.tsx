import { FC, ReactNode } from 'react'
import Meta from './Meta'
import { Header } from './headers'
import MenuOffcavans from '@modules/commons/offcanvas/MenuOffCanvas'

const MyLayout:FC<{children: ReactNode}> = ({ children }) => {
  return (
    <>
      <Meta></Meta>
       <div className="main-container">
        <Header />
        <MenuOffcavans />
        <main id="content" role="main">
          {children}
        </main>
      </div>

    </>
  )
}

export default MyLayout
