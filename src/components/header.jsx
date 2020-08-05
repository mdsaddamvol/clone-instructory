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
			<span className='span2'>Become an Online Teacher</span>
		</div>

		<div className='signin-out '>
			<span className='signin'>Sign In</span>
			<span className='signout'>Sign Up</span>
		</div>
	</div>
);

export default Header;
