import React from "react";
import "./hero.scss";
const Hero = (props) => {
	return (
		<section id='slider_section' className='slider-wrapper'>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-7 slider-col slider-left'>
						<div className='slider-text'>
							<div className='caption'>
								<p>
									Teach what you know, or lecture what you love. Teach as you
									want in the way that best suits your style and personality. We
									are serving you the platform that assists you to create and
									sell your own online courses.
								</p>
								<a href='yh' className='width-btn-primary-lg slider-btn bg-red'>
									Upload Your Knowledge
								</a>
							</div>
						</div>
					</div>
					<div className='col-sm-5 slider-col slider-right'>
						<div className='slider-img'>
							<img
								src='https://instructory.net//assets/images/slider-new.png'
								alt='slider'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
