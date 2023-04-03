import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../requests";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = (props) => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axios
			.get(requests.url, {
				params: props.type,
			})
			.then((res) => {
				setMovies(res.data);
			});
	}, [props.type]);

	const slideL = () => {
		var slider = document.getElementById("slider" + props.rowID);
		slider.scrollLeft = slider.scrollLeft - 50;
	};

	const slideR = () => {
		var slider = document.getElementById("slider" + props.rowID);
		slider.scrollLeft = slider.scrollLeft + 50;
	};

	return (
		<React.Fragment>
			<h2 className="text-white font-bold md:text-xl p-4">
				{props.title}
			</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft
					className="bg-white absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
					onClick={slideL}
				></MdChevronLeft>
				<div
					id={"slider" + props.rowID}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
				>
					{movies.map((item, id) => (
						<Movie key={item?.movieID} item={item}></Movie>
					))}
				</div>
				<MdChevronRight
					className="bg-white right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
					onClick={slideR}
				></MdChevronRight>
			</div>
		</React.Fragment>
	);
};

export default Row;
