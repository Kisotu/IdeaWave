/* eslint-disable react/prop-types */
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom";

import { BsLightbulb } from "react-icons/bs"
import { MdDashboardCustomize } from "react-icons/md";

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
	return (
		<aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
			<div className="sidebar-title">
				<div className="sidebar-brand">
					<img src={logo} alt="logo" className="logo" />
					{/* <BsCart4 className="header_icon"/>IdeaWave */}
				</div>
				<span className="icon close_icon" onClick={OpenSidebar}>X</span>
			</div>

			<ul className="sidebar-list">
				{/* sidebar routes */}
				<li className="sidebar-list-item">
					<Link to={"/dashboard"}>
						<MdDashboardCustomize className="icon" />Dashboard
					</Link>
				</li>
				{/* <li className="sidebar-list-item">
					<Link to={"/dashboard/insights"}>
						<BsFillBarChartLineFill className="icon" />Insights
					</Link>
				</li> */}
				<li className="sidebar-list-item">
					<Link to={"/dashboard/generate"}>
						<BsLightbulb className="icon" />Idea-Gen
					</Link>
				</li>
			</ul>
		</aside>
	)
}

export default Sidebar