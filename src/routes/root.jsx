import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import { CustomCarousel } from '../components/carousel'

export default function Root(props) {
  return (
    <div>
      <Header/>
      <CustomCarousel/>
      <Outlet/>
      <footer>footer</footer>
    </div>
  )
}
