import React from "react";
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import Back from "../common/back/Back";
import "./contact.css";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const AnyReactComponent = () => (
  <div style={{
    color: 'red',
    fontSize: '24px',
    transform: 'translate(-50%, -50%)'
  }}>
    <FaMapMarkerAlt />
  </div>
);

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 9.0266,
      lng: 7.6073,
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // Replace with your Google Maps API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      <AnyReactComponent
          lat={9.0266}
          lng={7.6073}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

const Contact = () => {
  return (
    <>
     <Header/>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <SimpleMap />
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
      <Footer/>
    </>
  );
}

export default Contact;
