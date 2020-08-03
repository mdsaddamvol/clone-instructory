import React from "react";
import "./header.scss";
import Logo from "./logo/logo";
import FblikeButtons from "./fblikebuttons/fblikebutton";
const Header = (props) => (
	<div className='container1'>
		<Logo />
		<FblikeButtons />
		<div className='strtlrn '>
			<span>Start Learning</span>
			<button className=''>Become an Online Teacher</button>
		</div>

		<div className='signin-out '>
			<span className='signin'>Sign In</span>
			<button className='signout'>Sign Up</button>
		</div>
	</div>
);

export default Header;
