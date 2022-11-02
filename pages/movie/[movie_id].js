import Head from "next/head";
import React from "react";
import Banner from "../../components/Banner";

const MovieDetails = ({ movie }) => {
	console.log(movie);
	return (
		<div className="">
			<Head>
				<title>{movie?.original_title || movie?.original_name}</title>
			</Head>

			<div className="relative">
				<Banner movie={movie} />
			</div>

			{/*2. Top bill casts */}
			{/* Recommendations */}
		</div>
	);
};

export default MovieDetails;

export async function getServerSideProps(context) {
	const { movie_id } = context.query;
	const id = parseInt(movie_id.split("-")[0]);
	console.log({ context });

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`
	).then((res) => res.json());
	return {
		props: {
			movie: response,
		},
	};
}
