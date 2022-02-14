import Head from 'next/head'
import styles from '../styles/homePage/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignCenter, faTextHeight, faBold, faItalic, faCircle, faAlignJustify, faAlignLeft, faQuoteLeft, faLink, faList } from '@fortawesome/free-solid-svg-icons'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head> 
        <title>NotePad</title>
        <meta meta="description" content="Generation by Mattheus" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/Vector.png" />
      </Head>
      <main className={styles.main}>
        <nav>
          <il>
            <li> <a href="mailto:ravitejakolla29@gmail.com" style={{fontsize:15}}>
              <FontAwesomeIcon icon={faBold} style={{ fontSize: 10, color: "blue" }} />
              
              </a> 
              </li>
          </il>
        </nav>
        <hr/> 
      </main>

    </div>
  )
}