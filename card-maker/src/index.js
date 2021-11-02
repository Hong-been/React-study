import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import firebaseApp from "./service/firebase";
import AuthService from "./service/auth_service";
import CardRepository from "./service/card_repository";
import ImageFileInput from "./components/page/design/image_file_input/image_file_input";

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository();
const FileInput = (props) => (
	<ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
	<React.StrictMode>
		<App authService={authService} cardRepository={cardRepository} />
	</React.StrictMode>,
	document.getElementById("root")
);
