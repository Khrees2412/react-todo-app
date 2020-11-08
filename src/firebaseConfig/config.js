import * as firebase from "firebase/app";
//import "firebase/storage"
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAGhp6RrsGG_g8ll-92RN6F8tUtipxJ3Ao",
	authDomain: "todoapp-f7ad0.firebaseapp.com",
	databaseURL: "https://todoapp-f7ad0.firebaseio.com",
	projectId: "todoapp-f7ad0",
	storageBucket: "todoapp-f7ad0.appspot.com",
	messagingSenderId: "721029476576",
	appId: "1:721029476576:web:278ed1ddaa2e8f76142085"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
