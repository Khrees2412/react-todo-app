import React, { useState, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import Navbar from "./Navbar";

export default function Signup() {
	const history = useHistory();
	const { signup, currentUser } = useAuth();

	const info = {
		name: "",
		email: "",
		password: ""
	};

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [inputValues, setInputValues] = useState(info);

	useEffect(() => {
		if (currentUser) {
			history.push("/todo");
		}
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setInputValues({ ...inputValues, [name]: value });
	};

	const { name, email, password } = inputValues;

	const handleSubmit = async e => {
		e.preventDefault();

		setInputValues({ name: "", email: "", password: "" });

		try {
			setError("");
			setLoading(true);
			await signup(email, password);
			history.push("/todo");
		} catch (err) {
			//setError(err)
			setError("An Error Occured. \n Failed to create an account. \n Try Again");
		}

		setLoading(false);
	};
	return (
		<Fragment>
			{loading ? (
				<div className="loading">Loading...</div>
			) : (
				<form onSubmit={handleSubmit}>
					{error && (
						<div className="error">
							{" "}
							{error} <button onClick={() => setError(null)}>X</button>
						</div>
					)}
					<div className="form-control">
						<label>Name</label>
						<input
							className="input"
							type="text"
							name="name"
							value={name}
							onChange={handleChange}
							required
						/>
					</div>
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
						Already have an account? <Link to="/login">Log In</Link>
					</div>
					<div className="hide">
						<Navbar name={name} />
					</div>
				</form>
			)}
		</Fragment>
	);
}
