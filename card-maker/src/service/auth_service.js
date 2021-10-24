import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
} from "firebase/auth";

class AuthService {
	constructor() {
		this.firebaseAuth = getAuth();
		this.googleProvider = new GoogleAuthProvider();
		this.githubProvider = new GithubAuthProvider();
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
	logIn(providerName) {
		// Google, Github
		try {
			const provider = this.getProvider(providerName);
			return signInWithPopup(this.firebaseAuth, provider);
		} catch (error) {
			console.log(error);
		}
	}
}
export default AuthService;
