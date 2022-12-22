import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import About from './About'
import Homepage from './landing'
import Secondpage from './secondpage'
import Thirdpage from './third'
import Contact from './contact'
import Reviews from './Reviews'



export default function Home() {
  return (
    <div>
      <Head>
        <title>E&M tours</title>
        <meta name="E&M travel$ and tour$" content="where to?" />
        <link rel="icon" href="/travel.png" />
      </Head>

      <main className='overflow-hidden'>
        <Navbar/>
        <Homepage/>
        <Secondpage/>
        <Reviews/>
        <About/>
        <Contact/>
        <Thirdpage/>
      </main>
    </div>
  )
}
