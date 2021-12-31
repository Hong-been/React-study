import {
	getAuth,
	signInWithPopup,
	onAuthStateChanged,
	GoogleAuthProvider,
	GithubAuthProvider,
	signOut,
} from "firebase/auth";

class AuthService {
	constructor() {
		this.firebaseAuth = getAuth();
		this.googleProvider = new GoogleAuthProvider();
		this.githubProvider = new GithubAuthProvider();
	}

	logIn(providerName) {
		try {
			const provider = this.getProvider(providerName);
			return signInWithPopup(this.firebaseAuth, provider);
		} catch (error) {
			console.log(error);
		}
	}

	logOut() {
		signOut(this.firebaseAuth);
	}
	isUserSignedIn() {
		return !!this.firebaseAuth.currentUser;
	}
	getUserData() {
		return this.firebaseAuth.currentUser;
	}
	onAuthChange(onUserChanged) {
		onAuthStateChanged(this.firebaseAuth, (user) => {
			onUserChanged(user);
		});
	}

	getProvider(providerName) {
		switch (providerName) {
			case "Google":
				return this.googleProvider;
			case "Github":
				return this.githubProvider;
			default:
				throw new Error(`not supported provider ${providerName}`);
		}
	}
}
export default AuthService;
