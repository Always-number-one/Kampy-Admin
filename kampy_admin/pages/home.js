import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SideBar from '../components/SideBar'

export default function Home() {
return (
   <div className={styles.container}>
     <Head>
        <title>Kampy</title>
      <meta name='description' content='admin Kampy ' />
     </Head>
     
      <div style={{
        position: "absolute",
        top: "0px",
        right: "0",
        width: "87%",
        height: "100%",
       
      }}>
        <SideBar />
        
              <h1 className='text-5xl text-center text-amber-600 mb-2'>Welcome To Kampy Dashboard</h1>
       
      </div>
   </div>
 )
}