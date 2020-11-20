import { Fragment, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { database } from "../firebaseConfig/config";
import { useAuth } from "../Context/authContext";
import { addUserTodo, deleteUserTodo } from "../database/controller";

const Todo = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([]);

	const { currentUser } = useAuth();
	const userID = currentUser?.uid;

	useEffect(() => {
		const _unsubscribe = database.where("userId", "==", userID).onSnapshot(snapshot => {
			const data = snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));
			setTodos(data);
			console.log("todos:" + todos);
		});
		return () => _unsubscribe;
	}, [userID, todos]);

	const handleChange = event => {
		setValue(event.target.value);
	};
	const handleSubmit = event => {
		event.preventDefault();
		setValue("");
	};

	const checkNotEmpty = item => {
		if (item.length > 0) return true;
		return false;
	};

	return (
		<Fragment>
			<Navbar />
			<form onSubmit={handleSubmit}>
				<input type="text" name="todo" value={value} onChange={handleChange} />
				<button className="add-btn" type="submit" onClick={() => addUserTodo(value, userID)}>
					ADD
				</button>
				{checkNotEmpty(todos) ? (
					todos.map((todo, index) => (
						<ul key={index}>
							<li>
								<button className="delete-btn" type="submit" onClick={() => deleteUserTodo(todo.id)}>
									Delete
								</button>
								{todo.text}{" "}
								<p style={{ color: "red", fontSize: "14px" }}>
									{todo.createdAt?.toDate().toLocaleString()}
								</p>
							</li>

							{/* <input type="checkbox" defaultChecked={todo.completed ? true : false} /> */}
						</ul>
					))
				) : (
					<h1>Nothing to see yet, Add a todo</h1>
				)}
			</form>
		</Fragment>
	);
};

export default Todo;
