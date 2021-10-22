import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styles from "./app.module.css";
import LoginPopUp from "./components/page/home/login_popup/login_popup";
import MainHeader from "./components/page/design/header/header";
import CardList from "./components/page/design/card_list/card_list";
import InputList from "./components/page/design/input_list/input_list";

import { getFirebaseConfig } from "./firebase-config.js";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import {
	getFirestore,
	collection,
	addDoc,
	query,
	orderBy,
	limit,
	onSnapshot,
	setDoc,
	updateDoc,
	doc,
	serverTimestamp,
} from "firebase/firestore";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseAppConfig = getFirebaseConfig();
// TODO 0: Initialize Firebase
initializeApp(firebaseAppConfig);

async function signIn() {
	// TODO 1: Sign in Firebase using popup auth and Google as the identity provider.
	try {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(getAuth(), provider);
	} catch (error) {
		console.log(error);
	}
}

function signOutUser() {
	// TODO 2: Sign out of Firebase.
	signOut(getAuth());
}

// // Initiate firebase auth
function initFirebaseAuth() {
	// TODO 3: Subscribe to the user's signed-in status
	onAuthStateChanged(getAuth(), authStateObserver);
}
// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
	// TODO 4: Return the user's profile pic URL.
	return getAuth().currentUser.photoURL || "/images/profile_placeholder.png";
}

// Returns the signed-in user's display name.
function getUserName() {
	// TODO 5: Return the user's display name.
	return getAuth().currentUser.displayName;
}
function isUserSignedIn() {
	// TODO 6: Return true if a user is signed-in.
	return !!getAuth().currentUser;
}

function authStateObserver(user) {
	if (user) {
		// User is signed in!
		const profilePicUrl = getProfilePicUrl();
		const userName = getUserName();
		console.log(profilePicUrl, userName);
	} else {
		console.log("User is signed out!");
	}
}

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={["/", "/home"]} exact>
					<LoginPopUp onLoginClick={signIn} />
				</Route>
				<Route path="/design" exact>
					<MainHeader onLogoutClick={signOutUser} />
					<main className={styles.contents}>
						<section className={styles.maker}>
							<div className={styles.subtitle}>Card Maker</div>
							<InputList />
						</section>
						<section className={styles.preview}>
							<div className={styles.subtitle}>Card Preview ✨</div>
							<CardList />
						</section>
					</main>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
