import type { NextPage } from 'next'
import Head from 'next/head'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chris Ekom | Professional Web|Blockchain Developer</title>
        <meta name="title" content="Christopher Ekom Web Development Projects, Blockchain Workspace Projects and Work Profile/Resume" />
        <meta
          name="description"
          content="I am Chris Ekom, A FullStack Blockchain Developer"
        />
        <meta
          name="keywords"
          content="Christopher Ekom, nextjs developer, reactjs developer, solidity developer, frontend developer, smart contract developer, portfolio"
        />
       
        <meta name="author" content="Chris Ekom" />
        <link rel="icon" href="/Capture-6.JPG" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default Home
