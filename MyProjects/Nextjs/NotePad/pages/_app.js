import { config } from '@fortawesome/fontawesome-svg-core'
import '../styles/globals.css'

config.autoAddCss = false

function NotePad({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default NotePad