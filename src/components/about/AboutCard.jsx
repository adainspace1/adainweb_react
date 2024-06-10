
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const AboutCard = () => {
  const About = () => {
    useEffect(() => {
      const scrollRevealOptions = {
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
      };
  
      ScrollReveal().reveal('.aboutHome', {
        ...scrollRevealOptions,
        interval: 500,
        delay: 500,
      });
    }, []); // Empty dependency array ensures this runs once on mount
  };
  
  
  return (
    <>
      <section className='aboutHome'>
        
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='People Technology Posibilities' title='About Us' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
