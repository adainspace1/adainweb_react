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
          <BlogCard image="./images/hack8.PNG" text1='Hacked8 Academy' text2='02-Dec-2023'/>
          <BlogCard image="./images/blog/3.png" text1='QuickMed' text2='09-Sept-2021'/>
          <BlogCard image="./images/blog/geez.png" text1='Geez Fashion' text2='09-Oct-2021'/>
          <BlogCard image="./images/Adnet.PNG" text1='AdaIn Tech' text2='06-Jun-2021'/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Blog
