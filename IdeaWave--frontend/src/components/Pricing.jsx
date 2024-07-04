import offset1 from "../assets/img/tables-left-dec.png"
import offset2 from "../assets/img/tables-right-dec.png"

const Pricing = () => {
  return (
	<div id="pricing" className="pricing-tables section">
  <div className="tables-left-dec">
    <img src={offset1} alt="" />
  </div>
  <div className="tables-right-dec">
    <img src={offset2} alt="" />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <div className="section-heading">
          <h2>
            Select a suitable <em>plan</em> for your next <span>projects</span>
          </h2>
          <span>Our Plans</span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="item first-item">
          <h4>Starter</h4>
          <em>$160/mo</em>
          <span>$140</span>
          <ul>
            <li>Limited data and insights</li>
            <li>5-10 ideas per</li>
            <li></li>
            <li>Basic Support</li>
          </ul>
          <div className="main-blue-button-hover">
            <a href="#">Get Started</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item second-item">
          <h4>Standard</h4>
          <em>$240/mo</em>
          <span>$200</span>
          <ul>
            <li> Full data and insights</li>
            <li>Unlimited ideas</li>
            <li>Pro Support</li>
            <li></li>
          </ul>
          <div className="main-blue-button-hover">
            <a href="#">Get it Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item third-item">
          <h4>Advanced</h4>
          <em>$360/mo</em>
          <span>$280</span>
          <ul>
            <li>Advanced data and insights</li>
            <li>Customized ideas</li>
            <li></li>
            <li>Priority support</li>
          </ul>
          <div className="main-blue-button-hover">
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Pricing