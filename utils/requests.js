const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	trending: {
		title: "Trending",
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	top_rated: {
		title: "Top Rated",
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	Action: {
		title: "Action",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	Comedy: {
		title: "Comedy",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	discover: {
		title: "Horror",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	Romance: {
		title: "Romance",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	Mistery: {
		title: "Mistery",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	Mistery: {
		title: "Mistery",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	},
	Sci_Fi: {
		title: "Sci-Fi",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	Western: {
		title: "Western",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	Animation: {
		title: "Animation",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	},
	Music: {
		title: "Music",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
	},
	History: {
		title: "History",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
	},
	War: {
		title: "War",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
	},
	Family: {
		title: "Family",
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
	},
};
