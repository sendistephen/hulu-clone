import Head from "next/head";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
	return (
		<div className="w-full overflow-hidden">
			<Head>
				<title>Hulu Clone</title>
			</Head>
			<Results results={results} />
		</div>
	);
}

/**
 * load the results page on initial page load => server side rendered
 * this function gets executed before the Home component making the results available on page load
 *  */

export async function getServerSideProps(context) {
	const genre = context.query.genre;
	const request = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}${requests[genre]?.url || requests.fetchTrending.url}`
	).then((res) => res.json());
	return {
		props: {
			results: request.results,
		},
	};
}
