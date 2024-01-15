import React from "react";
import LanguageSwitcher from "@/components/ui/Lang";

const Navbar = () => (
	<nav className="flex justify-between items-center p-6 max-md:justify-center bg-white">
		<div className="uppercase font-bold text-lg break-words max-h-6">my.gov.ge</div>
		<div className="hidden md:block">
			<LanguageSwitcher />
		</div>
	</nav>
);

export default Navbar;
