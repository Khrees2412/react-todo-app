import { database, createdAt } from "../firebaseConfig/config";

export function addUserTodo(data, userID) {
	if (!data) return;
	database.add({
		userId: userID,
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
	database.doc(id).delete();
}
