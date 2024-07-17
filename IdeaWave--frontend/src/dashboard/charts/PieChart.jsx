import { useState } from "react"
import ReactApexChart from "react-apexcharts"

const PieChart = () => {
	const [chartdata, setChartData] = useState({
		series: [44, 55, 13, 43, 22],
		options: {
			chart: {
				width: 500,
				type: 'pie',
			},
			title: {
				text: 'Areas of interest',
				align: 'center'
			},
			labels: ['Fashion', 'Celebrities', 'Popular Slogans', 'Pet', 'Sports'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 240
					},
				}
			}]
		}

	})
	return (
		<ReactApexChart options={chartdata.options} series={chartdata.series} type="pie" width={500} />
	)
}

export default PieChart