import {
	getDatabase,
	ref,
	set,
	onValue,
	off,
	update,
	remove,
} from "firebase/database";

class CardRepository {
	constructor() {
		this.database = getDatabase();
	}
	signUpUser(userId, name, email) {
		const userRef = ref(this.database, `users/${userId}`);
		onValue(userRef, (snapshot) => {
			const data = snapshot.val();
			return data.username
				? console.log("Yes.")
				: set(userRef, {
						username: name,
						email: email,
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
	writeCardsData(userId, cards) {
		const cardsListRef = ref(this.database, `users/${userId}/cards/`);
		update(cardsListRef, cards);
	}
	getAllCardsData(userId, callback) {
		const cardsRef = ref(this.database, `users/${userId}/cards`);
		onValue(cardsRef, (snapshot) => {
			const cards = snapshot.val();
			callback(cards);
		});
		return () => off(cardsRef);
	}
	deleteCard(userId, cardId) {
		const cardRef = ref(this.database, `users/${userId}/cards/${cardId}`);
		set(cardRef, {});
		remove(cardRef);
	}
}
export default CardRepository;
