import React from "react"
import Header from "../common/header/Header"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Footer from "../common/footer/Footer"

const About = () => {
  return (
    <>
     <Header/>
      <Back title='About AdaIn' />
      <AboutCard />
      <Footer/>
    </>
    
  )
}

export default About
