import React from 'react'
import { Sidebar } from '../Components/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Sidebar/>
        <Outlet/>
      
    </div>
  )
}

export  {Layout}