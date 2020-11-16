import Todo from "./components/Todo";
import "./App.css";
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
					<PrivateRoute exact path="/" component={Todo} />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
