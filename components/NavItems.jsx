import React from "react";

const NavItems = ({ title, Icon }) => {
	return (
		<div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
			<Icon className="w-8 h-8 mb-1 group-hover:animate-bounce group-hover:opacity-100" />
			<p className="opacity-0 group-hover:opacity-100 tracking-widest">
				{title}
			</p>
		</div>
	);
};

export default NavItems;
