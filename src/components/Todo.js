import { Fragment } from "react";

const Todo = ({ todos, deleteTodo }) => {
	const checkNotEmpty = item => {
		if (item.length > 0) return true;
		return false;
	};

	return (
		<Fragment>
			{checkNotEmpty(todos) ? (
				todos.map((todo, index) => (
					<ul key={index}>
						<li>
							<button className="delete-btn" type="submit" onClick={() => deleteTodo(index)}>
								DELETE
							</button>{" "}
							{todo.text}
						</li>

						{/* <input type="checkbox" defaultChecked={todo.completed ? true : false} /> */}
					</ul>
				))
			) : (
				<h1>Nothing to see yet, Add a todo</h1>
			)}
		</Fragment>
	);
};

export default Todo;
