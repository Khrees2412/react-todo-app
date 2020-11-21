import React, { useState, Fragment, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/authContext";

function Login() {
	const history = useHistory();
	const { login, currentUser } = useAuth();

	const info = {
		email: "",
		password: ""
	};

	const [inputValues, setInputValues] = useState(info);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		if (currentUser) {
			history.push("/todo");
		}
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setInputValues({ ...inputValues, [name]: value });
	};

	const handleSubmit = async e => {
		e.preventDefault();

		setInputValues({ email: "", password: "" });

		try {
			setError("");
			setLoading(true);
			await login(email, password);
			history.push("/todo");
		} catch (err) {
			//setError(err)
			setError("An Error Occured. \n Try again");
		}
		setLoading(false);
	};
	const { email, password } = inputValues;

	return (
		<Fragment>
			{loading ? (
				<div className="loading">Loading...</div>
			) : (
				<form onSubmit={handleSubmit}>
					{error && (
						<div className="error">
							{" "}
							{error}
							<button onClick={() => setError(null)}>X</button>
						</div>
					)}
					<div className="form-control">
						<label>Email</label>
						<input
							className="input"
							type="email"
							name="email"
							value={email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-control">
						<label>Password</label>
						<input
							className="input"
							type="password"
							name="password"
							value={password}
							onChange={handleChange}
							required
						/>
					</div>
					<button className="sub-btn">Submit</button>
					<div>
						Don't have an account? <Link to="/signup">Create Account</Link>
					</div>
				</form>
			)}
		</Fragment>
	);
}
export default Login;
