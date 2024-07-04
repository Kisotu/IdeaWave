
import insight from "../assets/img/insight.png"

const Hero = () => {
	return (
		<>
			{/* Hero*/}
			<div id="about" className="about-us section">
				<div className="container">
					<div className="row">

						<div className="col-lg-6">
							<div className="section-heading">
								<h2>
								Develop targeted strategies & <em>Identify</em> &amp;{" "}
									<span>High</span> Potential Markets
								</h2>
								<p>
								Get research reports that provide actionable insights and 
								recommendations for product development, marketing, and sales strategies.
								</p>
								<div className="row">
									<div className="col-lg-4">
										<div className="fact-item">
											<div className="count-area-content">
												<div className="icon">
													<img src="assets/images/service-icon-01.png" alt="" />
												</div>
												<div className="count-digit">378</div>
												<div className="count-title">Successful Businesses</div>
												<p> Successful  product launch 
													within 12 months.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="fact-item">
											<div className="count-area-content">
												<div className="icon">
													<img src="assets/images/service-icon-02.png" alt="" />
												</div>
												<div className="count-digit">85%</div>
												<div className="count-title">Risk Reduction</div>
												<p>Informed decisions about product development</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="fact-item">
											<div className="count-area-content">
												<div className="icon">
													<img src="assets/images/service-icon-03.png" alt="" />
												</div>
												<div className="count-digit">30%</div>
												<div className="count-title">Market share increase</div>
												<p>Effective strategies for growth and expansion.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div><div className="col-lg-6 align-self-center">
							<div className="left-image">
								<img
									src={insight}
									alt="Trends infographic"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>

	)
}

export default Hero