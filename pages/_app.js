import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Header />
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
