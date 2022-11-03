import React from "react";
import ReactPlayer from "react-player";

const Videos = ({ movie }) => {
	const videos = movie?.videos?.results;
	return (
		<div className="w-full my-6">
			<div className="flex flex-wrap w-full gap-8">
				<div className="flex w-full gap-4 rounded-lg">
					{videos?.map((video) => (
						<div key={video.id}>
							<ReactPlayer
								url={`https://www.youtube.com/watch?v=${video?.key}`}
								height="380px"
								width="300px"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Videos;
