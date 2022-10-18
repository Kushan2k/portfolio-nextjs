import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Service from '../Components/Service'
import Projects from '../Components/Projects'


export default function Home() {

  

  return (
    <div className={styles.container}>
      <Head>
        
        <title>Kushan Gayantha</title>
        <meta name="description" content="Come work with me,i will give my best for your work" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='keywords' content='nextjs,react,tailwindcss,blog'/>
      </Head>

      <main className=''>
        <section className=' bg-white overflow-hidden'>
          {/* <Navbar setcolor={ setColorTheme} /> */}
          <div className=' w-screen p-10'>
            <About />
            <Service/>
          </div>
          <div className="p-1" id='projects'>
            <Projects/>
          </div>
        </section>
      </main>
    </div>
  )
}
