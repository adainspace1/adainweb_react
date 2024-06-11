import React from "react";
import Back from "../common/back/Back";
import "./contact.css";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

function Contact() {
  return (
    <>
      <Header />
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>01 SkyBlue Building, Beside BeamClinic....Mararaba</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>info@adain.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+ 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder='Create a message here...'></textarea>
              <button className='primary-btn' type='submit'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
