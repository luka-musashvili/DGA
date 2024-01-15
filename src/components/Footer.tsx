import React from "react";
import LanguageSwitcher from "@/components/ui/Lang";

const Footer = () => (
	<footer className="flexCenter pb-8 md:hidden bg-white">
		<div className="w-48">
			<LanguageSwitcher />
		</div>
	</footer>
);

export default Footer;
