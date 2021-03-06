import { initializeApp } from "firebase/app";

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID,
};

function getFirebaseConfig() {
	if (!config || !config.apiKey) {
		throw new Error(
			"No Firebase configuration object provided." +
				"\n" +
				"Add your web app's configuration object to firebase-config.js"
		);
	} else {
		return config;
	}
}

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

export default firebaseApp;
