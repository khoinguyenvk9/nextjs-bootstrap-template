import 'styles/globals.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import 'styles/custom.scss'
import 'styles/borders.css'
import 'styles/chip.css'
import 'styles/text.css'
import 'styles/spacing.css'
import 'styles/animations.css'
import MyLayout from '@modules/layouts/MyLayout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  )
}

export default MyApp
