import Todo from "./components/Todo";
import "./App.css";
// import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./Context/authContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					{/* <Route exact path="/" component={Home} /> */}
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<PrivateRoute exact path="/" component={Todo} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
