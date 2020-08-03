import React from "react";
import Header from "./components/header.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/hero/hero.jsx";

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero props />
		</div>
	);
}

export default App;
