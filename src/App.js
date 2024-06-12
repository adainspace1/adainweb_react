import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import './App.css'



function App() {

  
  return (
    
      <Routes>
        
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    <Route  path='/courses' element={<CourseHome/>} />
    <Route  path='/team' element={<Team/>} />
    <Route  path='/journal' element={<Blog/>} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    
    
  );
  }

export default App
