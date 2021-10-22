const config = {
	apiKey: "AIzaSyCoSFqA2tme6OIuzNY64WQIaywUVjKPt44",
	authDomain: "business-card-maker-45f02.firebaseapp.com",
	projectId: "business-card-maker-45f02",
	storageBucket: "business-card-maker-45f02.appspot.com",
	messagingSenderId: "988299561262",
	appId: "1:988299561262:web:4df097468615bb0d40d2bf",
	measurementId: "G-SYKSD9WCDH",
};

export function getFirebaseConfig() {
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
