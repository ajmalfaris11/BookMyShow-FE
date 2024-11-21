import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import { CustomCarousel } from '../components/carousel'
import Footer from '../components/footer'

export default function Root(props) {
  return (
    <div>
      <Header/>
      <CustomCarousel/>
      <Outlet/>
      <Footer />
    </div>
  )
}
