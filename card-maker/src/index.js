import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import firebaseApp from "./service/firebase";
import AuthService from "./service/auth_service";
import RealtimeService from "./service/realtime_service";

const authService = new AuthService(firebaseApp);
const realtimeService = new RealtimeService();

ReactDOM.render(
	<React.StrictMode>
		<App authService={authService} realtimeService={realtimeService} />
	</React.StrictMode>,
	document.getElementById("root")
);
