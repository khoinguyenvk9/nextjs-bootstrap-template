import 'styles/globals.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import 'styles/custom.scss'
import 'styles/borders.css'
import 'styles/chip.css'
import 'styles/text.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
