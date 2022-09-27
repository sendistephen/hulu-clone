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
		<header className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center h-auto">
			<div className="flex justify-between items-center flex-grow max-w-2xl">
				<NavItems title="HOME" Icon={HomeIcon} />
				<NavItems title="TRENDING" Icon={LightBulbIcon} />
				<NavItems title="VERIFIED" Icon={CheckBadgeIcon} />
				<NavItems title="COLLECTIONS" Icon={QueueListIcon} />
				<NavItems title="SEARCH" Icon={MagnifyingGlassIcon} />
				<NavItems title="ACCOUNT" Icon={UserIcon} />
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
