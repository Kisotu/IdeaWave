/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { BsJustify  } from "react-icons/bs"
import { TbLogout2 } from "react-icons/tb";
// import { FaSearch } from "react-icons/fa";


export const Header = ({OpenSidebar}) => {
  return (
    <div className="header">
			<div className="menu-icon">
				<BsJustify  className="icon" onClick={OpenSidebar}/>
			</div>
			<div className="header-left">
				<h3>Dashboard</h3>
			</div>
			<div className="header-right">
				<Link to={"/"}><TbLogout2 className="icon" />logout</Link>
			</div>
		</div>
  )
}

export default Header