import { FC, ReactNode, useEffect } from 'react'
import Meta from './Meta'
import { Header } from './headers'
import MenuOffcavans from '@modules/commons/offcanvas/MenuOffCanvas'
import Prism from 'prismjs'
import Script from 'next/script'

const MyLayout: FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
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
      <Script src="/prismjs.js" />
    </>
  )
}

export default MyLayout
