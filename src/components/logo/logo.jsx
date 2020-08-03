import React from "react";
import "./logo.scss";
const Logo = (props) => {
	return (
		<div className='logo  '>
			<div className='logo-primary '>
				<span className='icon '>
					<i className='fas fa-play-circle'></i>
				</span>

				<span className='icon'>
					<img
						src='https://instructory.net//assets/images/logo-blue_beta.png'
						alt='Instructory - Online teaching marketplace'
					/>
				</span>
			</div>
		</div>
	);
};

export default Logo;
