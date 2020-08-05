import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
	faCartPlus,
	faHeart,
	faShare,
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header.jsx";
import "react-glide/lib/reactGlide.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/hero/hero.jsx";

import AllCourses from "./components/sections/allcorses/allcouses.component.jsx";
library.add(fab, faCartPlus, faHeart, faShare);
function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />

			<AllCourses />
		</div>
	);
}

export default App;
