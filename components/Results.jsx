import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
	const movies = results?.filter((member) => member.media_type !== "tv");
	return (
		<FlipMove className="flex-wrap justify-center gap-5 px-5 mt-10 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 3xl:flex">
			{movies?.map((result) => (
				<Thumbnail key={result.id} result={result} />
			))}
		</FlipMove>
	);
};

export default Results;
