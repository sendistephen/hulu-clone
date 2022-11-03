import Image from "next/image";
import React, { forwardRef } from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
	const slugStart =
		result?.name || result?.original_name || result?.original_title?.split(":").join("");
	const slugFinal = slugStart?.split(" ").join("-");

	
	console.log(result);
	return (
		<Link href={`/movie/${result?.id}-${slugFinal?.toLowerCase()}`}>
			<div
				ref={ref}
				className="transition-all duration-200 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-50">
				<Image
					src={`https://image.tmdb.org/t/p/original${
						result?.backdrop_path || result?.poster_path || result?.poster_path
					}`}
					alt={result.original_title}
					className="object-contain transition-all duration-100 ease-in-out rounded-lg group-hover:animate-pulse"
					layout="responsive"
					height={1080}
					width={1920}
				/>
				<div className="p-2">
					<p className="max-w-md font-normal truncate font">{result?.overview}</p>
					<h2 className="mt-1 text-lg font-normal text-green-500 font-quicksand sm:group-hover:font-bold sm:transition-all sm:duration-100 sm:ease-in-out">
						{result?.title || result?.original_name}
					</h2>
					<p className="flex items-center gap-4 my-2 text-xs opacity-0 group-hover:opacity-100">
						{result?.media_type && `${result?.media_type} • `}
						{result?.release_date || result?.first_air_date} •
						<span className="flex items-center gap-2">
							<HandThumbUpIcon className="w-6 h-6" />
							{result?.vote_count}
						</span>
					</p>
				</div>
			</div>
		</Link>
	);
});

export default Thumbnail;
