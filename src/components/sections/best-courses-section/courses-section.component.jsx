import React, { useState, useEffect } from "react";
import CoursesCard from "../../cards/courses-card/couses-card.component";
import "./courses-section.scss";
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
	return (
		<div className='container'>
			<div className='border-bottom '>
				<h1 className=''>{catagory} corses</h1>
			</div>
			<div className='card-container'>
				{photos
					.filter((photo, idx) => idx < 4)
					.map((photo) => {
						return <CoursesCard {...photo} key={photo.id} />;
					})}
			</div>
		</div>
	);
};

export default Courses;
