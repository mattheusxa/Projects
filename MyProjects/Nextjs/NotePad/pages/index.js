import React from 'react'
import Head from 'next/head'
import styles from '../styles/homePage/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignCenter, 
         faTextHeight, 
         faBold, 
         faItalic, 
         faCircle, 
         faAlignJustify, 
         faAlignLeft, 
         faQuoteLeft, 
         faLink, 
         faList 
        } from '@fortawesome/free-solid-svg-icons'

export default function HomePage() {

  const [message, setMessage] = React.useState('')
  
  function HandleBolt(event){
    
  }

  console.log(message)

  return (
    <div className={styles.container}>
      <Head> 
        <title>NotePad</title>
        <meta meta="description" content="Generation by Mattheus" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/Vector.png" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <ul>
            <li><FontAwesomeIcon className={styles.icon} icon={faTextHeight}/></li>
            <li><FontAwesomeIcon className={styles.icon} 
                onClick={()=> {
                  

            }} icon={faBold}/></li>
            <li><FontAwesomeIcon className={styles.icon} icon={faItalic}/></li>
            <li><FontAwesomeIcon className={styles.icon} icon={faCircle}/></li>
            <li><FontAwesomeIcon className={styles.icon} icon={faAlignJustify}/></li>
            <li><FontAwesomeIcon className={styles.icon} icon={faAlignCenter}/></li>
            <li><FontAwesomeIcon className={styles.icon} icon={faAlignLeft}/></li>
            <li><FontAwesomeIcon className={styles.icon} icon={faQuoteLeft}/></li>
            <li><FontAwesomeIcon className={styles.icon} icon={faLink}/></li>
            <li><FontAwesomeIcon className={styles.icon} icon={faList}/></li>
          </ul>
        </nav>
        <hr/>
        <textarea className={styles.text} rows='25'

        
        placeholder="Digite aqui..."
        valuer={message}
        onChange={
          function Handler(event){
            const valor = event.target.value
            setMessage(valor)
          }
        
        
        
        }
        
        
        />
      </main>

    </div>
  )
}