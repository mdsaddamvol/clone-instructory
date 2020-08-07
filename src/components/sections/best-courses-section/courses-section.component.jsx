import React, { useState, useEffect } from "react";
import CoursesCard from "../../cards/courses-card/couses-card.component";
import "./courses-section.scss";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
const Courses = ({ id, catagory }) => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		console.log(photos);
		if (photos.length === 0) {
			const fetchdta = () => {
				fetch("https://jsonplaceholder.typicode.com/photos")
					.then((respons) => respons.json())
					.then((jso) => setPhotos(jso.slice(0, 9)));
			};
			fetchdta();
		}
	}, [photos, setPhotos]);
	const options = {
		items: 4,
		autoplayHoverPause: true,
		rewind: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			600: {
				items: 3,
				nav: false,
			},
			1000: {
				items: 4,
			},
		},
	};

	return (
		<div className='container'>
			<div className='border-bottom '>
				<h1 className=''>{catagory} corses</h1>
			</div>
			<OwlCarousel useRef='car' options={options}>
				{photos.map((photo) => {
					return <CoursesCard {...photo} key={photo.id} />;
				})}
			</OwlCarousel>
		</div>
	);
};

export default Courses;
