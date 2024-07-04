import logo from  "../assets/img/logo.png"

function Navbar() {
  return (
	<>
  {/* ***** Header Area Start ***** */}
  <header
    className="header-area header-sticky sticky-nav wow slideInDown"
    data-wow-duration="0.75s"
    data-wow-delay="0s"
  >
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="#" className="logo">
              <img src={logo} />
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li className="scroll-to-section">
                <a href="#top" className="active">
                  Home
                </a>
              </li>
              <li className="scroll-to-section">
                <a href="#services">Services</a>
              </li>
              <li className="scroll-to-section">
                <a href="#about">About</a>
              </li>
              <li className="scroll-to-section">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="scroll-to-section">
                <a href="#login">Login</a>
              </li>
              <li className="scroll-to-section">
                <div className="main-red-button-hover">
                  <a href="#">Sign Up</a>
                </div>
              </li>
            </ul>
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* ***** Header Area End ***** */}
</>

  )
}

export default Navbar