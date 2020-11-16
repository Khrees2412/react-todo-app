import { auth } from "../firebaseConfig/config";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";

export default function Navbar({ name }) {
	const history = useHistory();

	const authLogOut = async () => {
		await auth.signOut();
		history.push("/login");
	};
	return (
		<Fragment>
			<div className="navbar">
				<strong>
					<span>Welcome {name}</span>
				</strong>
				<div className="side">
					<a href="https://christianndu.com" target="_blank" rel="noreferrer">
						Contact Developer
					</a>
					<button onClick={authLogOut}>Log Out</button>
				</div>
			</div>
		</Fragment>
	);
}
