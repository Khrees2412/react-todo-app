import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAGhp6RrsGG_g8ll-92RN6F8tUtipxJ3Ao",
	authDomain: "todoapp-f7ad0.firebaseapp.com",
	databaseURL: "https://todoapp-f7ad0.firebaseio.com",
	projectId: "todoapp-f7ad0",
	storageBucket: "todoapp-f7ad0.appspot.com",
	messagingSenderId: "721029476576",
	appId: "1:721029476576:web:278ed1ddaa2e8f76142085"
};
/* Didn't work for some reason */

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// 	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_FIREBASE_APP_ID

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore().collection("User Todos");
const auth = firebase.auth();

const createdAt = firebase.firestore.FieldValue.serverTimestamp();

export { database, auth, createdAt };
