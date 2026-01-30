import { useState, useRef } from 'react'
import '../styles/App.css'
import Header from '../components/header.jsx'
import Hero from '../sections/hero.jsx'
import MySkill from '../sections/mySkill.jsx'
import AboutUs from '../sections/aboutUs.jsx'
import MyProject from '../sections/myProject.jsx'
import Footer from '../components/footer.jsx'

function home() {
  const [count, setCount] = useState(0)
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const sections = { section1Ref, section2Ref, section3Ref, section4Ref }


  return (
    <>
      <Header sections={sections}></Header>
      <Hero refProp={section1Ref}></Hero>
      <MySkill refProp={section2Ref}></MySkill>
      <MyProject refProp={section3Ref}></MyProject>
      <AboutUs refProp={section4Ref}></AboutUs>
      <Footer></Footer>
    </>
  )
}

export default home