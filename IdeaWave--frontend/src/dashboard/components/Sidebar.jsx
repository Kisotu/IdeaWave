/* eslint-disable react/prop-types */
import logo from "../../assets/img/logo.png"

import { BsFillBarChartLineFill, BsLightbulb } from "react-icons/bs"
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
				<li className="sidebar-list-item">
					<a href="">
						<MdDashboardCustomize className="icon" />Dashboard
					</a>
				</li>
				<li className="sidebar-list-item">
					<a href="">
						<BsFillBarChartLineFill className="icon" />Insights
					</a>
				</li>
				<li className="sidebar-list-item">
					<a href="">
						<BsLightbulb className="icon" />Idea-Gen
					</a>
				</li>
			</ul>
		</aside>
	)
}

export default Sidebar