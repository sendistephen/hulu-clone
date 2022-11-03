import { useRouter } from "next/router";
import React from "react";

const NavItems = ({ title, Icon }) => {
	return (
		<div className="flex flex-col items-center w-12 cursor-pointer group sm:w-20 hover:text-white">
			<Icon className="w-8 h-8 mb-1 group-hover:animate-bounce group-hover:opacity-100" />
			<p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
		</div>
	);
};

export default NavItems;
