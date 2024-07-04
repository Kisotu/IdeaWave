import "../assets/css/login.css"

const Login = () => {
  return (
    <div className="bg">
      <div className="login-container">
        <div className="login-card">
          <div className="login-card_title">
            <h1>Login</h1>
            <span>
              Dont have an account? <a href="login">Register</a>
            </span>
          </div>
          <div className="login-form">
            <form action="#" method="post">
              
              <input type="email" name="email" placeholder="Email" id="email" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
              <button>Login</button>
            </form>
          </div>
          {/* <div className="card_terms">
            <input type="checkbox" name="" id="terms" />{" "}
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Login