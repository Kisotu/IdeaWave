import { useEffect, useState } from "react";
import AreaChart from "../charts/AreaChart"
import PieChart from "../charts/PieChart";

import { BiUser, BiDollar } from "react-icons/bi"
import { PiTrendUp } from "react-icons/pi";

const Content = () => {
	const [trends, setTrends] = useState([]);

	useEffect(() => {
		const storedTrends = localStorage.getItem('trends');
		if (storedTrends) {
			setTrends(JSON.parse(storedTrends));
		}
	}, []);
	return (
		<>
			<div className="main-cards">
				<div className="card">
					<div className="card-inner">
						<h4>Revenue</h4>
						<div className="card-analytics">
							<BiDollar className="revenue-icon" />
							<h2>1,000 $</h2>
						</div>
					</div>
				</div>


				<div className="card">
					<div className="card-inner">
						<h4>Trending Topics</h4>
						<div className="card-analytics">
							<PiTrendUp className="trend-icon" />
							<h2>15</h2>
						</div>
					</div>
				</div>


				<div className="card">
					<div className="card-inner">
						<h4>Users</h4>
						<div className="card-analytics">
							<BiUser className="analytics-icon" />
							<h2>5</h2>
						</div>
					</div>
				</div>

			</div>
			<div className="chart-card">
				<div className="card">
					<AreaChart />
				</div>
				<div className="card">
					<PieChart />
				</div>
			</div>

			<div className="list_card">
				<h3 className="list_title">Todays Trends</h3>
				<ol className="list">
					{trends.map((trend, index) => (
						<li key={index}>{trend}</li>
					))}
				</ol>
			</div>

		</>
	)
}

export default Content