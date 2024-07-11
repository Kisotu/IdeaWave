import { useState } from "react"
import "../dashboard/dashboard.css"
import Header from "./components/Header"
import Main from "./components/Main"
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
      <Main />
    </div>
  )
}

export default Dashboard