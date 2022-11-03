import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import {
	HomeIcon,
	LightBulbIcon,
	MagnifyingGlassIcon,
	QueueListIcon,
	UserIcon,
	CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
	return (
		<header className="flex flex-col-reverse items-center justify-between h-auto m-5 sm:flex-row">
			<div className="flex items-center justify-between flex-grow max-w-2xl">
				<NavItems title="SEARCH" Icon={MagnifyingGlassIcon} />
			</div>
			<Image
				className="object-contain"
				src="https://links.papareact.com/ua6"
				alt="hulu"
				width="200"
				height="100"
			/>
		</header>
	);
};

export default Header;
