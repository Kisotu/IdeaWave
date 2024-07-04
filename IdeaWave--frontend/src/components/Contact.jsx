import contact_bg from "../assets/img/contact-form-bg.png"

const Contact = () => {
  return (
	<div id="contact" className="contact-us section">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <div className="section-heading">
          <h2>
             <em>Contact</em> us via the <span>HTML form</span>
          </h2>
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28165.05658607351!2d36.80877810883627!3d-1.2924936667166063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1720119836518!5m2!1sen!2ske"
              width="100%"
              height="360px"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>
          <div className="info">
            <span>
              <i className="fa fa-phone" />{" "}
              <a href="#">
                010-020-0340
                <br />
                090-080-0760
              </a>
            </span>
            <span>
              <i className="fa fa-envelope" />{" "}
              <a href="#">
                info@company.com
                <br />
                mail@company.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-5 align-self-center">
        <form id="contact" action="" method="get">
          <div className="row">
            <div className="col-lg-12">
              <fieldset>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name"
                  autoComplete="on"
                  required=""
                />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <input
                  type="surname"
                  name="surname"
                  id="surname"
                  placeholder="Surname"
                  autoComplete="on"
                  required=""
                />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <input
                  type="text"
                  name="email"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  placeholder="Your Email"
                  required=""
                />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <input
                  type="text"
                  name="website"
                  id="website"
                  placeholder="Your Website URL"
                  required=""
                />
              </fieldset>
            </div>
            <div className="col-lg-12">
              <fieldset>
                <button type="submit" id="form-submit" className="main-button">
                  Submit Request
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="contact-dec">
    <img src={contact_bg} alt="" />
  </div>
  {/* <div className="contact-left-dec">
    <img src="assets/images/contact-left-dec.png" alt="" />
  </div> */}
</div>

  )
}

export default Contact