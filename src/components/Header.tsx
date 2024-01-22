"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();
	const isUserProfilePage = pathname.startsWith("/user/");

	const headerTexts: Record<string, string> = {
		"/users": "მომხმარებლები",
		"/roles": "როლები",
		"/tabs": "ჩანართები",
		"/user:id": "პროფილი",
	};

	const headerText = isUserProfilePage ? "პროფილი" : headerTexts[pathname] || "მთავარი გვერდი";

	return (
		<header className="flexBetween fixed top-0 mt-2.5 px-6 ml-[80px] h-[56px] w-[calc(100%-80px)]">
			<h1 className="font-normal text-base uppercase ">{headerText}</h1>
			<div className="flexBetween">
				<div>
					<Image className="w-auto h-auto p-2" width={0} height={0} src="/images/header/Frame 293.svg" alt="notifications" />
				</div>
				<div className="flexBetween py-2 px-3 gap-2">
					<div>
						<Image className="rounded-[200px] border-[1.5px] border-white" width={24} height={24} src="/images/header/avatar.jpeg" alt="avatar" />
					</div>
					<div>
						<Image className="w-auto h-auto" width={0} height={0} src="/images/header/Vector.svg" alt="menu" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
