import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Banner from "../../components/Banner";
import Casts from "../../components/Casts";
import Videos from "../../components/Videos";

const MovieDetails = ({ movie }) => {
	const params = useRouter();

	return (
		<div className="w-full">
			<Head>
				<title>{movie?.original_title || movie?.original_name}</title>
			</Head>

			<div className="relative">
				<Banner movie={movie} />
			</div>

			<p className="px-6 mt-12 text-2xl font-bold text-green-400 sm:text-center">
				{movie?.tagline}
			</p>
			<div className="flex flex-wrap gap-12 px-6 sm:px-16">
				<div className="overflow-x-scroll sm:w-2/3">
					<Videos movie={movie} />
				</div>
				<div className="flex-1 space-y-3 sm:mt-7">
					<div>
						<h3 className="font-bold text-white">Genres</h3>
						<div className="text-dimWhite">
							{movie?.genres?.map((genre) => (
								<div key={genre.id} className="flex items-center gap-2">
									<div className="w-2 h-2 bg-red-500 rounded-full" />
									<p className="text-sm tracking-wider">{genre.name}</p>
								</div>
							))}
						</div>
					</div>
					<div>
						<h3 className="font-bold text-white">Production companies</h3>
						<div className="text-dimWhite">
							{movie?.production_companies?.map((company) => (
								<div key={company.id} className="flex items-center gap-2">
									<div className="w-2 h-2 bg-green-500 rounded-full" />
									<p className="text-sm tracking-wider">{company.name}</p>
								</div>
							))}
						</div>
					</div>
					<div>
						<h3 className="font-bold text-white">Budget</h3>
						<p className="text-sm tracking-wider">$ {movie?.budget}</p>
					</div>
					<div>
						<h3 className="font-bold text-white">Revenue</h3>
						<p className="text-sm tracking-wider">$ {movie?.revenue}</p>
					</div>
					<div>
						<h3 className="font-bold text-white">Language</h3>
						<p className="text-sm tracking-wider">{movie?.original_language}</p>
					</div>
				</div>
			</div>
			{/*2. Top bill casts */}
			<Casts/>
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
