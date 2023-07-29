import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1>Hello World!</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
						minima atque sunt pariatur debitis dolores facere ipsa cum porro
						fugiat. Voluptas possimus nam quam provident reiciendis est
						distinctio asperiores quisquam!
					</p>
					<span>Lets create an account</span>
					<Link to="/register">
						<button>Register</button>
					</Link>
				</div>
				<div className="right">
					<h1>Login</h1>
					<form>
						<input type="text" placeholder="Username" />
						<input type="password" placeholder="Password" />
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
