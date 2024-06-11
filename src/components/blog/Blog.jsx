import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"


const Blog = () => {
  return (
    <>
     <Header/>
      <Back title='Our Products' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard image="./images/Mission.jpg" text1='Hacked8 Academy' text2='02-Dec-2023'/>
          <BlogCard image="./images/" text1='Geez Fashion' text2='09-Sept-2021'/>
          <BlogCard image="./images/Mission.jpg" text1='Geez Fashion' text2='09-Sept-2021'/>
          <BlogCard image="./images/Mission.jpg" text1='Geez Fashion' text2='09-Sept-2021'/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Blog
