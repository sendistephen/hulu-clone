/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Casts = ({ movie }) => {
	const [casts, setCasts] = useState([]);

	useEffect(() => {
		async function fetchCasts() {
			const data = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/${movie?.media_type === "tv" ? "tv" : "movie"}/${
					movie?.id
				}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
			)
				.then((res) => res.json())
				.catch((err) => console.log(err.message));
			if (data?.cast) {
				const cast = data?.cast?.filter((member) => member.order < 10);
				setCasts(cast);
			}
		}
		fetchCasts();
	}, [movie]);

	const casters = casts?.filter((member) => member.profile_path !== null);

	return (
		<div className="px-6 sm:px-16">
			<h1 className="my-4 text-xl font-bold text-green-400">Top Billed Casts</h1>
			<div className="flex gap-4 overflow-x-scroll">
				{casters?.map((member) => (
					<div key={member.id} className="relative w-full h-64">
						<Image
							src={`https://image.tmdb.org/t/p/w300${member.profile_path}`}
							alt={member.character}
							width="150px"
							height="250px"
							objectFit="cover"
							layout="fixed"
						/>

						<div className="absolute bottom-0 w-full px-4 py-4 mt-2 space-y-1 text-xs bg-red-400">
							<p className="font-medium text-black">{member.name}</p>
							<p className="text-dimWhite">{member.character}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Casts;
