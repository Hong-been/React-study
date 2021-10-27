import {
	getDatabase,
	ref,
	set,
	onValue,
	off,
	update,
	remove,
} from "firebase/database";
import {
	getStorage,
	getDownloadURL,
	uploadBytes,
	ref as storageRef,
} from "firebase/storage";

class CardRepository {
	constructor() {
		this.database = getDatabase();
		this.storage = getStorage();
	}
	signUpUser(userId, name, email, imageUrl) {
		console.log("is user signed up?");
		const userRef = ref(this.database, `users/${userId}`);
		onValue(userRef, (snapshot) => {
			const data = snapshot.val();
			return data.username
				? ref(this.database, `users/${userId}/cards`)
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

	uploadPhoto(userId, cardId, photo) {
		const photoRef = storageRef(this.storage, `${userId}/${cardId}`);
		uploadBytes(photoRef, photo).then((snapshot) => {
			console.log("Uploaded a blob or file!");
		});
		return photoRef.fullPath;
	}
	downloadPhoto(userId, cardId, callback) {
		const photoRef = storageRef(this.storage, `${userId}/${cardId}`);

		getDownloadURL(photoRef) //
			.then(callback)
			.catch((error) => {
				console.log(photoRef);
				switch (error.code) {
					case "storage/object-not-found":
						console.log("File doesn't exist");
						break;
					case "storage/unauthorized":
						console.log("User doesn't have permission to access the object");
						break;
					case "storage/canceled":
						console.log("User canceled the upload");
						break;
					case "storage/unknown":
						console.log("Unknown error occurred, inspect the server response");
						break;
				}
			});
	}
}
export default CardRepository;
