import React from 'react'
import SideBar from './SideBar.js'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex over'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Body
