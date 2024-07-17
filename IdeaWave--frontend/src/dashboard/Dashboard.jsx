import { useState } from "react"
import "../dashboard/dashboard.css"
import Header from "./components/Header"
import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"


const Dashboard = () => {
  const[openSidebarToggle, setOpenSibarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSibarToggle(!openSidebarToggle)
  }

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Layout />
    </div>
  )
}

export default Dashboard