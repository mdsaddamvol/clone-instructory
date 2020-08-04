import React, { useState, useEffect } from "react";
import CoursesCard from "../../cards/courses-card/couses-card.component";

const BestCourses = (props) => {
	const [posts, setPosts] = useState([]);
	const [photos, setPhotos] = useState([]);
	useEffect(() => {
		console.log(posts);

		if (posts.length === 0) {
			const fetchdata = () => {
				fetch("https://jsonplaceholder.typicode.com/posts")
					.then((response) => response.json())
					.then((json) => setPosts(json.slice(90, 99)));
			};
			fetchdata();
		}
	}, [posts, setPosts]);
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
	return photos.map((photo) => {
		return <CoursesCard {...photo} key={photos.id} />;
	});
};

export default BestCourses;
