import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					backgroundColor: "black",
					color: "purple",
					fontSize: "22px",
					height: "100vh"
				}}
			>
				<Link style={{ margin: "250px" }} to="/login">
					Login
				</Link>
				<Link style={{ margin: "250px" }} to="/signup">
					Signup
				</Link>
			</div>
		</>
	);
}
