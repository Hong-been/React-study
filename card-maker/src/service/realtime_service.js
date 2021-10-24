import {
	getDatabase,
	ref,
	set,
	onValue,
	update,
	child,
} from "firebase/database";

class RealtimeService {
	constructor() {
		this.database = getDatabase();
	}
	writeUserData(userId, name, email, imageUrl) {
		set(ref(this.database, "users/" + userId), {
			username: name,
			email: email,
			profile_picture: imageUrl,
			cards: {},
		});
	}
	readUserDate(userId) {
		const userRef = ref(this.database, "users/" + userId);
		onValue(userRef, (snapshot) => {
			const data = snapshot.val();
			return data;
		});
	}
	writeCardsData(userId, cardId, key, value) {
		const cardsListRef = ref(
			this.database,
			"users/" + userId + "cards/" + cardId
		);
		update(cardsListRef, {
			[key]: value,
		});
	}
	readCardsData(userId) {
		const cardsRef = ref(this.database, "users/" + userId + "cards/");
		onValue(cardsRef, (snapshot) => {
			const data = snapshot.val();
			return data;
		});
	}
}
export default RealtimeService;
