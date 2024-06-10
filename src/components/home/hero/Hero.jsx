import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO Adain Technologies' title='' />
            <p>Adain Technologies: Pioneering the future with cutting-edge AI and innovative tech solutions. Empowering businesses through intelligent automation and seamless integration.</p>
            <div className='button'>
              <button className='primary-btn' a href="/path/to/components/about/AboutCard" >
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* <button> VIEW ADAIN <i className='fa fa-long-arrow-alt-right'></i></button> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
