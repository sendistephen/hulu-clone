import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";

const Navbar = () => {
	const router = useRouter();
	return (
		<nav className="relative">
			<div className="flex px-10 mb-6 space-x-10 overflow-x-scroll text-xl sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide">
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						key={key}
						onClick={() => router.push(`/?genre=${key}`)}
						className="transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-white active:text-green-500">
						{title}
					</h2>
				))}
			</div>
			<div className="absolute top-0 right-0 bg-gradient-to-l from-[#191818] h-10 w-1/12" />
		</nav>
	);
};

export default Navbar;
