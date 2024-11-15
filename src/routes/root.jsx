import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'

export default function Root(props) {
  return (
    <div>
      <Header/>
      <Outlet/>
      <footer>footer</footer>
    </div>
  )
}
