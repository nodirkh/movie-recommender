import React, { useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Recommendation = () => {
	const [age, setAge] = useState("");
	const [genre, setGenre] = useState("");
	const [movies, setMovies] = useState([]);
    
	const getRecs = async () => {
		axios
			.get("http://localhost:8080/projectApp/api/users/recommendations", {
				params: {"gender": "", "age": age, "occupation": "", "genres": genre},
			})
			.then((res) => {
				setMovies(res.data);
			});
	};

    const slideL = () => {
		var slider = document.getElementById("sliderp");
		slider.scrollLeft = slider.scrollLeft - 50;
	};

	const slideR = () => {
		var slider = document.getElementById("sliderp");
		slider.scrollLeft = slider.scrollLeft + 50;
	};

	return (
		<React.Fragment>
			<div className="flex justify-center">
				<div>
					<p className="text-white font-bold">Genre:</p>
					<input
						type="text"
						className="w-full"
						onChange={(e) => setGenre(e.target.value)}
					></input>
					<p className="text-white font-bold">Age:</p>
					<input
						type="number"
						className="w-full"
						onChange={(e) => setAge(e.target.value)}
					></input>
					<button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:text-black transition-all duration-300 w-full mt-5"
                    onClick={getRecs}>
						Find
					</button>
				</div>
			</div>
            <h2 className="text-white font-bold md:text-xl p-4">
				Your Picks
			</h2>
            <div className="relative flex items-center group">
				<MdChevronLeft
					className="bg-white absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
					onClick={slideL}
				></MdChevronLeft>
				<div
					id={"sliderp"}
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

export default Recommendation;
