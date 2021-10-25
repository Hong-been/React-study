import {
	getDatabase,
	ref,
	set,
	onValue,
	off,
	update,
	remove,
} from "firebase/database";

class RealtimeService {
	constructor() {
		this.database = getDatabase();
	}
	signUpUser(userId, name, email, imageUrl) {
		console.log("is user signed up?");
		const userRef = ref(this.database, `users/${userId}`);
		onValue(userRef, (snapshot) => {
			const data = snapshot.val();
			return data.username
				? "already signed up"
				: set(userRef, {
						username: name,
						email: email,
						profile_picture: imageUrl,
				  });
		});
	}
	readUserDate(userId) {
		const userRef = ref(this.database, `users/${userId}`);
		onValue(userRef, (snapshot) => {
			const data = snapshot.val();
			return data;
		});
	}
	writeCardsData(userId, cardId, key, value) {
		const cardsListRef = ref(this.database, `users/${userId}/cards/${cardId}`);
		update(cardsListRef, {
			[key]: value,
		});
	}
	getAllCardsData(userId, callback) {
		console.log("get all cards");
		const cardsRef = ref(this.database, `users/${userId}/cards`);
		onValue(cardsRef, (snapshot) => {
			const cards = snapshot.val();
			callback(cards);
		});
		// cardsRef.on("value", (snapshot) => {
		// 	const cards = snapshot.val();
		// 	callback(cards);
		// });
		return () => off(cardsRef);
	}
	deleteCard(userId, cardId) {
		const cardRef = ref(this.database, `users/${userId}/cards/${cardId}`);
		remove(cardRef);
	}
}
export default RealtimeService;
