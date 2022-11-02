import Image from "next/image";
import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const Banner = ({ movie }) => {
	return (
		<div className="bg-gradient-to-t from-[#111]">
			<div className="relative flex flex-col py-16 space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 overflow-y-hidden">
				<div className="absolute top-0 left-0 w-screen h-[75vh] -z-20">
					<Image
						className=""
						src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${
							movie?.backdrop_path || movie?.poster_path
						}`}
						layout="fill"
						objectFit="cover"
						alt="hero banner"
					/>
				</div>
				<div className="px-8 sm:px-16">
					<h1 className="text-2xl font-bold text-shadow-xl text-dimWhite md:text-4xl lg:text-7xl">
						{movie?.title || movie?.original_title || movie?.name || movie?.original_name}
					</h1>
					<div className="flex items-center gap-2 my-4 text-xs">
						<span>Released on {movie.release_date}</span> |
						{movie.genres?.map((genre) => (
							<span key={genre.id}>{genre.name}</span>
						))}
						|<span>Runtime {movie.runtime + " mins"}</span> |
						<span>language: {movie?.original_language}</span>
					</div>
					<p className="max-w-xs text-xs text-dimWhite text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl">
						{movie?.overview}
					</p>
					<div className="flex items-center mt-8 space-x-5 transition-all duration-500 ease-in group">
						<button className="flex items-center gap-2 p-3 font-bold text-black bg-transparent bg-white rounded hover:bg-gray-300">
							<PlayIcon className="w-5 h-5 text-black md:h-6 md:w-6" />
							<span>Play Trailer</span>
						</button>
						<div className="flex gap-4"></div>
					</div>
				</div>
			</div>
            <div className="absolute inset-0 z-50 w-full h-full bg-black opacity-50"></div>
		</div>
	);
};

export default Banner;
