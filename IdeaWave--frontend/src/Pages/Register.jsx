import "../assets/css/register.css"

const Register = () => {
	return (
		<div className="bg">
			<div className="reg-container">
				<div className="reg-card">
					<div className="reg-card_title">
						<h1>Create Account</h1>
						<span>
							Already have an account? <a href="login">Sign in</a>
						</span>
					</div>
					<div className="reg-form">
						<form action="#" method="post">
							<input
								type="text"
								name="username"
								id="username"
								placeholder="Enter Username"
							/>
							<input type="email" name="email" placeholder=" Enter Email" id="email" />
							<input
								type="password"
								name="password"
								placeholder="Input password"
								id="password"
							/>

							<input
								type="password"
								name="password2"
								placeholder="Input password again"
								id="password2"
							/>
							<button>Sign Up</button>
						</form>
					</div>
					<div className="reg-card_terms">
						<input type="checkbox" name="" id="terms" />{" "}
						<span>
							I have read and agree to the <a href="">Terms of Service</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register