import right_image from "../assets/img/right_image.png"
import left_image from "../assets/img/left_image.png"

import icon1 from "../assets/img/service-icon-01.png"
import icon2 from "../assets/img/service-icon-02.png"
import icon3 from "../assets/img/service-icon-03.png"
import icon4 from "../assets/img/service-icon-04.png"

const Services = () => {
	return (
		<div id="services" className="our-services section">
			<div className="services-right-dec">
				<img src={right_image} alt="" />
			</div>
			<div className="container">
				<div className="services-left-dec">
					<img src={left_image} alt="" />
				</div>
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<div className="section-heading">
							<h2>
								We <em>Provide</em> The Best Service With <span>Our Tools</span>
							</h2>
							<span>Our Services</span>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3">
						<div className="item">
							<h4>Trend Analysis and Reporting</h4>
							<div className="icon">
								<img src={icon1} alt="" />
							</div>
							<p>We analyzes the latest trend data to identify emerging patterns, 
								shifts, and opportunities in various industries and markets.</p>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item">
							<h4>Idea Generation and Incubation</h4>
							<div className="icon">
								<img src={icon2} alt="" />
							</div>
							<p>We help clients refine and develop deas, providing 
								guidance on feasibility, market potential, and competitive advantage.</p>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item">
							<h4>Market Research and Validation</h4>
							<div className="icon">
								<img src={icon3} alt="" />
							</div>
							<p>Market research to validate the viability and potential 
								of generated ideas, customer needs, market size, and competitive landscape.</p>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="item">
							<h4>Market sizing and opportunity assessment</h4>
							<div className="icon">
								<img src={icon4} alt="" />
							</div>
							<p>Analyze factors such as trends, consumer behavior, 
								competition, and economic conditions to determine the total addressable market (TAM) or the potential market size.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Services