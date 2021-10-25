import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import styles from "./app.module.css";
import LoginPopUp from "./components/page/home/login_popup/login_popup";
import DesignPage from "./components/page/design/design_page/design_page";

function App({ authService, cardRepository }) {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={["/", "/login"]} exact>
					<LoginPopUp authService={authService} />
				</Route>
				<Route path="/design" exact>
					<DesignPage
						authService={authService}
						cardRepository={cardRepository}
					/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
