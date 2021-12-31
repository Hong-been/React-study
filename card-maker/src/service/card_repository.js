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
	syncCards(userId, name, onUpdate) {
		// console.log(userId);
		const userRef = ref(this.database, `users/${userId}`);
		onValue(userRef, (snapshot) => {
			const data = snapshot.val();

			data && onUpdate(data);
			return () => {
				console.log("end");
			};
		});
	}

	saveCard(userId, card) {
		const userRef = ref(this.database, `users/${userId}/cards/${card.id}`);
		set(userRef, card);
	}

	removeCard(userId, card) {
		const userRef = ref(this.database, `users/${userId}/cards/${card.id}`);
		remove(userRef);
	}
}
export default CardRepository;
