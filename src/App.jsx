import './App.css'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import SkillsPage from './components/Skills'
import Expertise from './components/Expertise'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/NAvbar'
import About from './components/About'
import React, { useState } from "react";
import Loader from './components/Loader'


function App() {
  const [isLoading, setIsLoading] = useState(true);
    const handleLoaderFinish = () => {
        setIsLoading(false);
    };

  return (
    <>
     {isLoading && <Loader onFinish={handleLoaderFinish} />}
     {!isLoading && (
    <>
    <Navigation />
      <Hero />
      <About />
      <Timeline />
      <SkillsPage />
      <Expertise />
      <ContactForm/>
      <Footer />  

    </>

     )}
    </>
  )
}

export default App
