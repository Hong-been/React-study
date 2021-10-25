import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import firebaseApp from "./service/firebase";
import AuthService from "./service/auth_service";
import CardRepository from "./service/card_repository";

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository();

ReactDOM.render(
	<React.StrictMode>
		<App authService={authService} cardRepository={cardRepository} />
	</React.StrictMode>,
	document.getElementById("root")
);
