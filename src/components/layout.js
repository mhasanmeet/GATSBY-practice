import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import './css/layout.css'
import './css/product.css'
import './css/blog.css'

const layout = ({children}) => {
  return (
    <>
      <Navbar/>
          <main>{children}</main>
      <Footer/>
    </>
  )
}

export default layout
