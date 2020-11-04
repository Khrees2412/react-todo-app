import React, { Fragment, useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([{ text: "Going to the shop?", completed: false }]);

	const handleChange = event => {
		setValue(event.target.value);
	};
	const handleSubmit = event => {
		event.preventDefault();
		setValue("");
	};

	const addTodo = item => {
		if (!item) return;

		setTodos([...todos, { text: item, completed: false }]);
		const localTodo = JSON.stringify(todos);
		localStorage.setItem("todoList:", localTodo);
	};
	const deleteTodo = id => {
		const deleted = todos.splice(id, 1);
		const newTodos = todos.filter(todo => todo !== deleted);
		setTodos([...newTodos]);
	};
	/* const editTodo = (theTodo)  => {
    setValue(theTodo.text)
    deleteTodo(theTodo.id)
  }
  */
	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<input type="text" name="todo" value={value} onChange={handleChange} />
				<button className="add-btn" type="submit" onClick={() => addTodo(value)}>
					ADD
				</button>

				<Todo todos={todos} deleteTodo={deleteTodo} />
			</form>
		</Fragment>
	);
}

export default App;
