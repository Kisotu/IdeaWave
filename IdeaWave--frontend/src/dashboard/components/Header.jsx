/* eslint-disable react/prop-types */

import { Bs1CircleFill, BsJustify  } from "react-icons/bs"
import { Fa4 } from "react-icons/fa6"
import { TbLogout2 } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";


export const Header = ({OpenSidebar}) => {
  return (
    <div className="header">
			<div className="menu-icon">
				<BsJustify  className="icon" onClick={OpenSidebar}/>
			</div>
			<div className="header-left">
				<FaSearch className="icon"/>
			</div>
			<div className="header-right">
				<Bs1CircleFill className="icon"/>
				<Fa4 className="icon" />
				<TbLogout2 className="icon" />
			</div>
		</div>
  )
}

export default Header