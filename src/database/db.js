import { database, createdAt } from "../firebaseConfig/config";

export function addUserTodo(data) {
	if (!data) return;
	database.add({
		text: data,
		createdAt
	});
}

export function getAllUserTodos() {
	database.get().then(snapshot => {
		snapshot.docs.forEach(doc => console.log(doc.data()));
	});
}
// export const unsubscribe = database.get().then(snapshot => {
// 	const data = snapshot.docs.forEach(doc => {
// 		 {id: doc.id, ...doc.data() };
// 		//setTodos();
// 	});
// });

export function updateData() {
	database.docs("").update({});
}
export function deleteUserTodo(id) {
	database.docs(id).delete();
}

export function snapGet() {
	database.collection("").onSnapshot(snapshot => {
		let changes = snapshot.docChanges();
		changes.forEach(change => {
			if (change.type === "added") {
				console.log(change.doc.data());
			} else if (change.type === "removed") {
				console.log(change.doc());
			}
		});
	});
}
